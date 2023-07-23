import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comment} from './comment.interface';

@Injectable({
    providedIn: 'root'
})
export class CommentsService {

    constructor(private http: HttpClient) {
    }

    public getComments(postId: number): Observable<Comment[]> {
        return this.http.get<Comment[]>(
            `/api/posts/${postId}/comment`,
        );
    }

    public createComment(postId: number, comment: Comment): Observable<Comment> {
        return this.http.post<Comment>(
            `/api/posts/${postId}/comment`,
            comment
        );
    }
}
