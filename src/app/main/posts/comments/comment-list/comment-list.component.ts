import {Component, Input} from '@angular/core';
import {Comment} from '../comment.interface';


@Component({
    selector: 'bread-comment-list',
    templateUrl: './comment-list.component.html',
    styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent {

    @Input() public comments: Comment[] = [];

    constructor() {
    }
}
