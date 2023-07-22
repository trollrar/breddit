import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {ROUTE_LOGIN} from '../../app-routing.constants';

@Injectable({
    providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
    constructor(private userService: UserService, private router: Router) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modifiedRequest = request.clone({
            setHeaders: this.userService.getAuthHeaders()
        });

        return next.handle(modifiedRequest).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    this.userService.logout();
                    this.router.navigate([ROUTE_LOGIN], {queryParams: {returnTo: this.router.url}});
                }

                return throwError(error);
            })
        );
    }
}
