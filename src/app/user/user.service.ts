import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LoginModalComponent} from './login/login-modal/login-modal.component';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';

@Injectable()
export class UserService {
    private authToken: string;
    public username: string;

    public get isLoggedIn() {
        return !!this.authToken;
    }

    constructor(private http: HttpClient, private modalService: NgbModal, private router: Router) {
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
        return this.http.post<{ token: string }>(`${environment.apiUrl}/auth/login`, {username, password})
            .pipe(
                catchError(({error}) => throwError(error && error.error || 'Unknown error')),
                map(({token}) => {
                    localStorage.setItem(USERNAME_STORAGE_KEY, username);
                    localStorage.setItem(USER_JWT_STORAGE_KEY, token);
                    this.authToken = token;
                    this.username = username;
                    return true;
                }),
            );
    }

    public openLoginModal(returnTo?: string) {
        if (this.modalService.hasOpenModals()) {
            return;
        }
        const ref = this.modalService.open(LoginModalComponent);
        if (returnTo) {
            ref.result.then(
                () => {
                    this.router.navigateByUrl(returnTo);
                }
            );
        }
    }
}

export const USERNAME_STORAGE_KEY = 'currentUserUsername';
export const USER_JWT_STORAGE_KEY = 'currentUserJwt';
