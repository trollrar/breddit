import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {PostsModule} from './posts/posts.module';
import {SharedModule} from './shared/shared.module';
import {UserModule} from './user/user.module';

const routes: Routes = [
    {
        path: '',
        children: [
            {path: '', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)},
        ],
    },
    {
        path: '*',
        redirectTo: '/',
    }
];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
    ],
    imports: [
        BrowserModule,
        SharedModule,
        HttpClientModule,
        PostsModule,
        UserModule,
        NgbModalModule,
        RouterModule.forRoot(routes),
        RouterModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
