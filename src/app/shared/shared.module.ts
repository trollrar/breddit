import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CardBoxComponent} from './card-box/card-box.component';
import {LoadingComponent} from './loading/loading.component';
import {TimeAgoPipe} from './pipes/time-ago.pipe';
import {NotFoundComponent} from './not-found/not-found.component';

const declarations: NgModule['declarations'] = [
    CardBoxComponent,
    LoadingComponent,
];

@NgModule({
    declarations: [...declarations, TimeAgoPipe, NotFoundComponent],
    exports: [...declarations, TimeAgoPipe, NotFoundComponent],
    imports: [
        CommonModule,
    ],
})
export class SharedModule {}
