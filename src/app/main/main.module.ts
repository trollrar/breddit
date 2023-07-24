import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {SharedModule} from '../shared/shared.module';
import {UserModule} from '../user/user.module';
import {NgbDropdownModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
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
import {PostVotesComponent} from './posts/post-votes/post-votes.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MetaGuard} from '@ngx-meta/core';
import {NotFoundComponent} from '../shared/not-found/not-found.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        canActivateChild: [MetaGuard],
        children: [
            {
                path: ROUTE_POST_LIST,
                pathMatch: 'full',
                component: PostListComponent,
                data: {
                    meta: {
                        title: 'Bread posts',
                        description: 'New fresh bread posts every day!'
                    }
                }
            },
            {
                path: ROUTE_POST_ADD,
                pathMatch: 'full',
                component: AddComponent,
                canActivate: [AuthGuard],
                data: {
                    meta: {
                        title: 'Add bread post',
                        description: 'Just write something about bread.',
                    }
                }
            },
            {
                path: ROUTE_POST,
                pathMatch: 'full',
                component: PostComponent,
                data: {
                    meta: {
                        title: 'Loading post',
                        description: 'Wait a little...',
                        'og:type': 'article'
                    }
                }
            },
            {
                path: '**',
                component: NotFoundComponent,
            }
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
        PostVotesComponent,
    ],
    imports: [
        CommonModule,
        NgbDropdownModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        UserModule,
        SharedModule,
        FontAwesomeModule,
        NgbTooltipModule,
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
