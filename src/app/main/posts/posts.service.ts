import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Post, PostsFilter} from './post.interface';
import {stringify} from 'query-string';
import {environment} from '../../../environments/environment';

@Injectable()
export class PostsService {
    constructor(
        private http: HttpClient,
    ) {
    }

    public getPostList(filter: PostsFilter): Observable<Post[]> {
        const queryString: string = stringify({filter});
        return this.http.get<Post[]>(`${environment.apiUrl}/posts/all?${queryString}`);
    }

    // TODO: Actually create api route to fetch one post
    public getPostById(postId: number): Observable<Post> {
        return this.http.get<Post[]>(`${environment.apiUrl}/posts/all?filter=hot`) // call without query does not work
            .pipe(map(posts => posts.find(post => post.id === postId)));
    }

    public createPost(post: Post): Observable<boolean> {
        return this.http.post(
            `${environment.apiUrl}/posts/new`,
            post,
        ).pipe(map(() => true));
    }

    public upvotePost(postId: number, upvote: boolean): Observable<boolean> {
        return this.http.post<any>(
            `${environment.apiUrl}/posts/${postId}/vote/${upvote ? 'up' : 'down'}`,
            {}
        ).pipe(map(({mode}) => mode));
    }
}
