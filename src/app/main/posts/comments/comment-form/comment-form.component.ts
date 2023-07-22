import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CommentsService} from '../comments.service';
import {Comment} from '../comment.interface';

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
    @Output() private readonly commentAdded: EventEmitter<void> = new EventEmitter();

    constructor(
        private fb: FormBuilder,
        private commentService: CommentsService,
    ) {
    }

    ngOnInit(): void {
        this.form = this.fb.group({
            content: this.fb.control(''),
        });
    }

    public onSubmit(formData: Comment): void {
        this.submitting = true;

        this.commentService.createComment(this.postId, formData).pipe()
            .subscribe(
                (success) => {
                    this.submitting = false;
                    if (!success) {
                        this.error = 'Unable to comment';
                        return;
                    }
                    this.error = '';
                    this.commentAdded.emit();
                },
                (message) => {
                    this.submitting = false;
                    this.error = message;
                }
            );
    }
}
