import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class UserService {
    private authToken: string;
    public isLoggedIn: boolean = false;

    constructor (private http: HttpClient) {}

    public getAuthHeaders (): {[header: string]: string | string[]} {
        if (this.authToken) {
            return {
                authorization: `bearer ${this.authToken}`,
            };
        }
        return {};
    }

    public logout (): void {
        this.authToken = '';
        this.isLoggedIn = false;
    }

    public fetchAuthToken (username: string, password: string): Observable<boolean> {
        return this.http.post<{token: string}>('/api/auth/login', {username, password})
            .pipe(
                catchError(({error}) => throwError(error && error && error.error || 'Unknown error')),
                map(({token}) => {
                    this.authToken = token;
                    this.isLoggedIn = true;
                    return true;
                }),
            );
    }
}
