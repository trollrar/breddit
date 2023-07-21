import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit} from '@angular/core';
import * as moment from 'moment';
import {Post} from '../post.interface';

@Component({
  selector: 'bread-post-summary',
  templateUrl: './post-summary.component.html',
  styleUrls: ['./post-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostSummaryComponent implements OnInit {
    public timeAgo: string = 'calculating';
    @Input() public post: Post;

    public ngOnInit(): void {
        this.timeAgo = moment(this.post.postedAt).fromNow();
    }
}
