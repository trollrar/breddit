import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {UserService} from './user.service';

@Injectable()
export class UserGuard implements CanActivate {
    constructor (private userService: UserService) {}

    public canActivate (): boolean {
        return this.userService.isLoggedIn;
    }
}
