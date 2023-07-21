import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '../shared/shared.module';
import {UserModule} from '../user/user.module';
import {AddComponent} from './add/add.component';
import {PostListComponent} from './post-list/post-list.component';
import {PostSummaryComponent} from './post-summary/post-summary.component';
import {PostsService} from './posts.service';
import {UserGuard} from '../user/user.guard';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: PostListComponent,
    },
    {
        path: 'add',
        pathMatch: 'full',
        component: AddComponent,
        canActivate: [UserGuard],
    }
]

@NgModule({
    declarations: [
        PostListComponent,
        PostSummaryComponent,
        AddComponent,
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
    providers: [
        PostsService,
    ],
    exports: [
        PostListComponent
    ],
})
export class PostsModule {}
