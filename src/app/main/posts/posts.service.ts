import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';
import {Post, PostsFilter} from './post.interface';
import {stringify} from 'query-string';

@Injectable()
export class PostsService {
    constructor (
        private http: HttpClient,
    ) {}

    public getPostList(filter: PostsFilter): Observable<Post[]> {
        const queryString: string = stringify({filter});
        return this.http.get<Post[]>(`/api/posts/all?${queryString}`)
            .pipe(take(1));
    }

    public createPost(post: Post): Observable<boolean> {
        return this.http.post(
            '/api/posts/new',
            post,
        ).pipe(take(1), map(() => true));
    }

    public upvotePost(postId: number, upvote: boolean): Observable<boolean> {
        return this.http.post(
            `/api/posts/${postId}/${upvote ? 'up' : 'down'}`,
            {}
        ).pipe(take(1), map(() => true));
    }
}
