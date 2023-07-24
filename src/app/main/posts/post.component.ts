import {Component, OnInit} from '@angular/core';
import {Post} from './post.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {PostsService} from './posts.service';
import {CommentsService} from './comments/comments.service';
import {Comment} from './comments/comment.interface';
import {combineLatest} from 'rxjs';
import {MetaService} from '@ngx-meta/core';

@Component({
    selector: 'bread-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
// TODO: PostComponent assumes that backend is fixed and voted value is sent with posts
export class PostComponent implements OnInit {

    public post: Post;
    public loading: boolean = true;
    public notFound: boolean = false;
    public comments: Comment[] = [];


    constructor(
        private route: ActivatedRoute,
        private postsService: PostsService,
        private router: Router,
        private commentService: CommentsService,
        private metaService: MetaService,
    ) {
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            const postId = Number(params.get('id'));
            if (!postId) {
                this.showNotFound();
                return;
            }

            this.loadPost(postId);
        });
    }

    private loadPost(id): void {
        this.loading = true;

        combineLatest([this.postsService.getPostById(id), this.commentService.getComments(id)]).subscribe(([post, comments]) => {
                this.post = post;
                this.comments = comments.reverse();

                this.metaService.setTitle(post.title);
                this.metaService.setTag('description', post.content.length < 150 ? post.content.slice(0, 150) : `${post.content}...`);
            }, ({status}) => {
                if (status === 404) {
                    this.showNotFound();
                }
            },
            () => this.loading = false
        );
    }

    public reloadComments(comment: Comment) {
        // All comments need to be fetched again since adding comment does not respond with created comment but true or false
        this.comments.push(comment);
    }

    public onVote(voteValue: number) {
        this.post.voted = voteValue > 0;
        this.post.score += voteValue;
    }

    private showNotFound(): void {
        this.notFound = true;
    }
}
