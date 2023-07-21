import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Post, PostsFilter} from './post.interface';
import {stringify} from 'query-string';
import {PostsModule} from './posts.module';
import {UserService} from '../user/user.service';

@Injectable()
export class PostsService {
    constructor (
        private http: HttpClient,
        private userService: UserService,
    ) {}

    public getPostList (filter: PostsFilter): Observable<Post[]> {
        const queryString: string = stringify({filter});
        return this.http.get<Post[]>(`/api/posts/all?${queryString}`)
            .pipe();
    }

    public createPost (post: Post): Observable<boolean> {
        return this.http.post(
            '/api/posts/new',
            post,
            {
                headers: this.userService.getAuthHeaders(),
            },
        ).pipe(map(() => true));
    }
}
