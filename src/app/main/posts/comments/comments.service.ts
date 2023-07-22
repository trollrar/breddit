import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comment} from './comment.interface';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CommentsService {

    constructor(private http: HttpClient) {
    }

    public getComments(postId: number): Observable<Comment[]> {
        return this.http.get<Comment[]>(
            `/api/posts/${postId}/comment`,
        ).pipe();
    }

    public createComment(postId: number, comment: Comment): Observable<boolean> {
        return this.http.post(
            `/api/posts/${postId}/comment`,
            comment
        ).pipe(map(() => true));
    }
}
