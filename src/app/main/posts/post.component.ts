import {Component, OnInit} from '@angular/core';
import {Post} from './post.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {PostsService} from './posts.service';
import {CommentsService} from './comments/comments.service';
import {Comment} from './comments/comment.interface';
import {combineLatest} from 'rxjs';
import {UserService} from '../../user/user.service';

@Component({
    selector: 'bread-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

    public post: Post;
    public loading: boolean = true;
    public comments: Comment[] = [];


    constructor(
        private route: ActivatedRoute,
        private postsService: PostsService,
        private router: Router,
        private commentService: CommentsService,
        public userService: UserService,
    ) {
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            const postId = Number(params.get('id'));
            if (!postId) {
                this.rerouteToPostList();
                return;
            }

            this.loadPost(postId);
        });
    }

    private loadPost(id): void {
        this.loading = true;

        combineLatest([this.postsService.getPostById(id), this.commentService.getComments(id)]).subscribe(([post, comments]) => {
            if (!post) {
                this.rerouteToPostList();
                return;
            }

            this.post = post;
            this.comments = comments;
            this.loading = false;
        });
    }

    public reloadComments(id: number) {
        this.commentService.getComments(id).subscribe(comments => {
            this.comments = comments;
        });
    }

    private rerouteToPostList(): void {
        this.router.navigateByUrl('/');
    }
}
