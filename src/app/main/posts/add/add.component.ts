import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PostsService} from '../posts.service';
import {Router} from '@angular/router';
import {Post} from '../post.interface';
import {ROUTE_POST_LIST} from '../../../app-routing.constants';

@Component({
    selector: 'bread-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
    public submitted: boolean = false;
    public error: string = '';
    public form: FormGroup;

    constructor (
        private fb: FormBuilder,
        private postsService: PostsService,
        private router: Router,
    ) {}

    public ngOnInit (): void {
        this.form = this.fb.group({
            title: this.fb.control(''),
            content: this.fb.control(''),
        });
    }

    public onSubmit(formData: Post): void {
        this.submitted = true;

        this.postsService.createPost(formData).subscribe(
            () => {
                this.router.navigateByUrl(ROUTE_POST_LIST);
            },
            ({error}) => {
                this.submitted = false;
                this.error = error;
            }
        );
    }
}
