import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'bread-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    private returnTo: string;

    constructor(private router: Router, private route: ActivatedRoute) {
        // Get the return URL from the query parameters
        this.returnTo = this.route.snapshot.queryParams.returnTo || '/';
    }

    onLoggedIn(loggedIn: boolean) {
        if (!loggedIn) {
            return;
        }
        this.router.navigateByUrl(this.returnTo);
    }
}
