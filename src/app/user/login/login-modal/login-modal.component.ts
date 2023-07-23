import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'bread-login',
    templateUrl: './login-modal.component.html',
    styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent {
    @Input() private returnTo: string;

    constructor(public modal: NgbActiveModal) {
    }
}
