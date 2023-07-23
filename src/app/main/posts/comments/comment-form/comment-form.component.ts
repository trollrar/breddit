import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CommentsService} from '../comments.service';
import {Comment} from '../comment.interface';
import {UserService} from '../../../../user/user.service';
import {User} from '../../../../user/user.interface';

@Component({
    selector: 'bread-comment-form',
    templateUrl: './comment-form.component.html',
    styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {
    public submitting: boolean = false;
    public error: string = '';
    public form: FormGroup;
    @Input() public postId: number;
    @Output() private readonly commentAdded: EventEmitter<Comment> = new EventEmitter();

    constructor(
        private fb: FormBuilder,
        private commentService: CommentsService,
        public userService: UserService
    ) {
    }

    ngOnInit(): void {
        this.form = this.fb.group({
            content: this.fb.control(''),
        });
    }

    public onSubmit(formData: Comment): void {
        this.submitting = true;
        const user = {username: this.userService.username} as User;
        this.error = '';

        this.commentService.createComment(this.postId, formData)
            .subscribe(
                (comment) => {
                    comment.from = user;
                    this.commentAdded.emit(comment);
                },
                ({error}) => {
                    this.error = error;
                },
                () => {
                    this.submitting = false;
                }
            );
    }
}
