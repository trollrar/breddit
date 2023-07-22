import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class UserService {
    private authToken: string;
    public username: string;

    public get isLoggedIn() {
        return !!this.authToken;
    }

    constructor(private http: HttpClient) {
        const authToken = localStorage.getItem(USER_JWT_STORAGE_KEY);

        if (authToken != null) {
            this.username = localStorage.getItem(USERNAME_STORAGE_KEY);
            this.authToken = authToken;
        }
    }

    public getAuthHeaders(): { [header: string]: string | string[] } {
        if (this.authToken) {
            return {
                authorization: `bearer ${this.authToken}`,
            };
        }
        return {};
    }

    public logout (): void {
        localStorage.removeItem(USERNAME_STORAGE_KEY);
        localStorage.removeItem(USER_JWT_STORAGE_KEY);
        this.authToken = '';
        this.username = '';
    }

    public fetchAuthToken (username: string, password: string): Observable<boolean> {
        return this.http.post<{token: string}>('/api/auth/login', {username, password})
            .pipe(
                catchError(({error}) => throwError(error && error && error.error || 'Unknown error')),
                map(({token}) => {
                    localStorage.setItem(USERNAME_STORAGE_KEY, username);
                    localStorage.setItem(USER_JWT_STORAGE_KEY, token);
                    this.authToken = token;
                    this.username = username;
                    return true;
                }),
            );
    }
}

export const USERNAME_STORAGE_KEY = 'currentUserUsername';
export const USER_JWT_STORAGE_KEY = 'currentUserJwt';
