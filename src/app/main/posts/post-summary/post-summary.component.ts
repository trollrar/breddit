import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Post} from '../post.interface';
import {ROUTE_POST} from '../../../app-routing.constants';

@Component({
    selector: 'bread-post-summary',
    templateUrl: './post-summary.component.html',
    styleUrls: ['./post-summary.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostSummaryComponent {
    @Input() public post: Post;

    get postPath() {
        return '/' + ROUTE_POST.replace(':id', this.post.id.toString());
    }

    public onVote(voteValue: number) {
        this.post.voted = voteValue > 0;
        this.post.score += voteValue;
    }
}
