import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {UserModule} from './user/user.module';
import {MainModule} from './main/main.module';

const routes: Routes = [
    {
        path: '',
        children: [
            {path: '', loadChildren: () => import('./main/main.module').then(m => m.MainModule)},
            {path: '', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
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
    ],
    imports: [
        BrowserModule,
        SharedModule,
        HttpClientModule,
        UserModule,
        MainModule,
        NgbModalModule,
        RouterModule.forRoot(routes),
        RouterModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
