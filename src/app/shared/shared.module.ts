import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CardBoxComponent} from './card-box/card-box.component';
import {LoadingComponent} from './loading/loading.component';

const declarations: NgModule['declarations'] = [
    CardBoxComponent,
    LoadingComponent,
];

@NgModule({
    declarations: [...declarations],
    exports: [...declarations],
    imports: [
        CommonModule,
    ],
})
export class SharedModule {}
