import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {SharedModule} from '../shared/shared.module';
import {UserModule} from '../user/user.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {MainComponent} from './main.component';
import {PostListComponent} from './posts/post-list/post-list.component';
import {PostSummaryComponent} from './posts/post-summary/post-summary.component';
import {AddComponent} from './posts/add/add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PostsService} from './posts/posts.service';
import {AuthGuard} from '../user/auth/auth.guard';
import {CommentListComponent} from './posts/comments/comment-list/comment-list.component';
import {CommentFormComponent} from './posts/comments/comment-form/comment-form.component';
import {PostComponent} from './posts/post.component';
import {ROUTE_POST, ROUTE_POST_ADD, ROUTE_POST_LIST} from '../app-routing.constants';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: ROUTE_POST_LIST,
                pathMatch: 'full',
                component: PostListComponent,
            },
            {
                path: ROUTE_POST_ADD,
                pathMatch: 'full',
                component: AddComponent,
                canActivate: [AuthGuard],
            },
            {
                path: ROUTE_POST,
                pathMatch: 'full',
                component: PostComponent,
            },
        ]
    }
];

@NgModule({
    declarations: [
        NavbarComponent,
        MainComponent,
        PostListComponent,
        PostSummaryComponent,
        AddComponent,
        CommentListComponent,
        CommentFormComponent,
        PostComponent,
    ],
    imports: [
        CommonModule,
        NgbDropdownModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        UserModule,
        SharedModule,
    ],
    providers: [PostsService,
    ],
    bootstrap: [
        MainComponent,
        PostListComponent
    ],
})
export class MainModule {
}
