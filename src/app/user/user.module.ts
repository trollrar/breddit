import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {LoginFormComponent} from './login-form/login-form.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {UserService} from './user.service';
import {SharedModule} from '../shared/shared.module';
import {UserGuard} from './user.guard';

@NgModule({
    declarations: [
        LoginFormComponent,
    ],
    exports: [
        LoginFormComponent,
    ],
    providers: [
        UserService,
        UserGuard,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
    ]
})
export class UserModule {}
