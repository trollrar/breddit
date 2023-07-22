import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {UserService} from '../user.service';
import {ROUTE_LOGIN} from '../../app-routing.constants';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private userService: UserService) {
    }

    public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.userService.isLoggedIn) {
            return true;
        }

        this.router.navigate([ROUTE_LOGIN], {queryParams: {returnTo: state.url}});
        return false;
    }
}
