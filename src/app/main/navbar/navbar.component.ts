import {Component, TemplateRef} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UserService} from '../../user/user.service';
import {ROUTE_POST_ADD} from '../../app-routing.constants';

@Component({
    selector: 'bread-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
    constructor(
        private modalService: NgbModal,
        public userService: UserService,
    ) {
    }

    public get addPostPath() {
        return ROUTE_POST_ADD;
    }

    public openModal(content: TemplateRef<any>): void {
        this.modalService.open(content);
    }
}
