import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PostsService} from '../posts.service';
import {UserService} from '../../../user/user.service';

@Component({
    selector: 'bread-post-votes',
    templateUrl: './post-votes.component.html',
    styleUrls: ['./post-votes.component.scss']
})
export class PostVotesComponent {
    @Input() public upvoted: boolean;
    @Input() public score: number;
    @Input() public postId: number;
    @Input() public column: boolean = true;
    @Output() public onVote: EventEmitter<number> = new EventEmitter<number>();
    public loading: boolean;

    constructor(private postsService: PostsService, private userService: UserService) {
    }

    public vote(upvote: boolean) {
        if (!this.userService.isLoggedIn) {
            this.userService.openLoginModal();
            return;
        }
        this.loading = true;
        this.postsService.upvotePost(this.postId, upvote).subscribe(
            (mode) => {
                if (mode === undefined) {
                    this.loading = false;
                    return;
                }
                let voteValue = (this.upvoted !== undefined) ? 2 : 1;
                if (!upvote) {
                    voteValue = -voteValue;
                }

                this.onVote.emit(voteValue);
                this.loading = false;
            }
        );
    }
}
