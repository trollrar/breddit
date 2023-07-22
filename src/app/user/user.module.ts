import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {LoginFormComponent} from './login/login-form/login-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from './user.service';
import {SharedModule} from '../shared/shared.module';
import {AuthGuard} from './auth/auth.guard';
import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginGuard} from './login/login.guard';


const routes: Routes = [
    {
        path: 'login',
        pathMatch: 'full',
        canActivate: [LoginGuard],
        component: LoginComponent,
    }
];

@NgModule({
    declarations: [
        LoginFormComponent,
        LoginComponent,
    ],
    exports: [
        LoginFormComponent,
    ],
    providers: [
        UserService,
        AuthGuard,
        LoginGuard,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
        RouterModule.forChild(routes),
    ]
})
export class UserModule {}
