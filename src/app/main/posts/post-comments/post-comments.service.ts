import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostComment} from './post-comment.interface';
import {map, take} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PostCommentsService {

    constructor(private http: HttpClient) {
    }

    public getPostComments(postId: number): Observable<PostComment[]> {
        return this.http.get<PostComment[]>(
            `/api/posts/${postId}/comment`,
        ).pipe(take(1));
    }

    public createPostComment(postId: number, content: string): Observable<boolean> {
        return this.http.post(
            `/api/posts/${postId}/comment`,
            {content}
        ).pipe(take(1), map(() => true));
    }
}
