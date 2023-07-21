import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators'
import {Injectable} from '@angular/core';
import {SharedModule} from './shared.module';

interface User {
    id: number;
    username: string;
}

interface GetTokenResopnse {
    token: string;
}

@Injectable({providedIn: SharedModule})
export class ApiService {
    constructor (private http: HttpClient) {}

    public getAuthToken (username: string, password: string): Observable<string> {
        return this.http.post<GetTokenResopnse>('/auth/login', {username, password})
            .pipe(
                map((response): string => response.token),
            );
    }
}
