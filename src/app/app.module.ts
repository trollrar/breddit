import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {UserModule} from './user/user.module';
import {MainModule} from './main/main.module';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {initIconLibrary} from './icons';
import {MetaLoader, MetaModule, MetaStaticLoader, PageTitlePositioning} from '@ngx-meta/core';
import {environment} from '../environments/environment';

function metaFactory(): MetaLoader {
    return new MetaStaticLoader({
        pageTitlePositioning: PageTitlePositioning.PrependPageTitle,
        pageTitleSeparator: ' - ',
        applicationName: 'breddit',
        applicationUrl: environment.canonicalUrl,
        defaults: {
            title: 'breddit',
            description: 'Best bread recipes in the universe!',
            'og:image': `${environment.canonicalUrl}/bread.png`,
            'og:type': 'website',
            'og:locale': 'en_US',
        }
    });
}

const routes: Routes = [
    {
        path: '',
        children: [{path: '', loadChildren: () => import('./main/main.module').then(m => m.MainModule)}],
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
        MetaModule.forRoot({
            provide: MetaLoader,
            useFactory: (metaFactory)
        }),
        FontAwesomeModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor(library: FaIconLibrary) {
        initIconLibrary(library);
    }
}
