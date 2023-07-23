import {Component} from '@angular/core';
import {UserService} from '../../user/user.service';
import {ROUTE_POST_ADD} from '../../app-routing.constants';

@Component({
    selector: 'bread-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
    constructor(
        public userService: UserService,
    ) {
    }

    public get addPostPath() {
        return '/' + ROUTE_POST_ADD;
    }
}
