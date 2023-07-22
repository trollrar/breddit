import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserService} from '../user.service';

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private router: Router, private userService: UserService) {
    }

    public canActivate(): boolean {
        if (!this.userService.isLoggedIn) {
            return true;
        }

        this.router.navigateByUrl('/');
        return false;
    }
}
