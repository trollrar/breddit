import {Component, Input, OnInit} from '@angular/core';
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
    @Input()
    public postId: number;

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
                () => {
                    this.submitting = false;
                },
                (message) => {
                    this.submitting = false;
                    this.error = message;
                }
            );
    }
}
