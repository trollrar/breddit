import {catchError, tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {UserService} from '../user.service';

@Injectable({
    providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
    constructor(public userService: UserService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modifiedRequest = request.clone({
            setHeaders: this.userService.getAuthHeaders()
        });

        return next.handle(modifiedRequest).pipe(
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {

                }
            }),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    this.userService.logout();
                }

                return throwError(error);
            })
        );
    }
}
