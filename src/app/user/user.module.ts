import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {LoginFormComponent} from './login/login-form/login-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from './user.service';
import {SharedModule} from '../shared/shared.module';
import {AuthGuard} from './auth/auth.guard';
import {LoginModalComponent} from './login/login-modal/login-modal.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './auth/auth.interceptor';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@NgModule({
    declarations: [
        LoginFormComponent,
        LoginModalComponent,
    ],
    exports: [
        LoginFormComponent,
    ],
    providers: [
        UserService,
        AuthGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
        FontAwesomeModule,
    ]
})
export class UserModule {}
