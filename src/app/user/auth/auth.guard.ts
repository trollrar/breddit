import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {UserService} from '../user.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private userService: UserService) {
    }

    public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.userService.isLoggedIn) {
            return true;
        }

        this.router.navigateByUrl('/');
        this.userService.openLoginModal(state.url);
        return false;
    }
}
