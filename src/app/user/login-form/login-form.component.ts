import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'bread-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
    public form: FormGroup;
    public submitted: boolean = false;
    public errorMessage: string = '';
    @Output() private readonly loggedIn: EventEmitter<boolean> = new EventEmitter();

    constructor (
        private fb: FormBuilder,
        private userService: UserService,
        private router: Router,
    ) {}

    public ngOnInit (): void {
        this.form = this.fb.group({
            username: this.fb.control(''),
            password: this.fb.control(''),
        });
    }

    public submitForm (formData: any): void {
        this.errorMessage = '';
        this.submitted = true;

        this.userService.fetchAuthToken(formData.username, formData.password)
            .subscribe(
                () => {
                    this.loggedIn.emit(true);
                },
                (message) => {
                    this.submitted = false;
                    this.errorMessage = message;
                }
            );
    }
}
