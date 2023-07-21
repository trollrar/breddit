import {ChangeDetectionStrategy, Component, Input, TemplateRef} from '@angular/core';

@Component({
    selector: 'bread-card-box',
    templateUrl: './card-box.component.html',
    styleUrls: ['./card-box.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardBoxComponent {
    @Input() public headerTemplate?: TemplateRef<any>;
}
