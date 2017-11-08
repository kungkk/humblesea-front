import { Injectable } from '@angular/core';

import {Http, Headers} from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
    results: Object[];
    endpoint: string = environment.oauth_token_url;

    constructor(private http: Http) { 

    }

    // origin code
//    login(user: string, password: string): boolean {
//        if (user === 'user' && password === 'password') {
//            localStorage.setItem('username', user);
//            return true;
//        }
//
//        return false;
//    }
    
            
    login(user: string, password: string): boolean {
        var body = "grant_type=password" + 
            "&client_id=" + environment.user_oauth_client_id +
            "&client_secret=" + environment.user_oauth_client_secret +
            "&scope=" + environment.user_oauth_scope + 
            "&username=" + user +
            "&password=" + password;
        console.log(body);
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        //let headers = new Headers({ 'Content-Type': 'application/json' });
        //headers.append('Authorization', 'Bearer {{access_token}}'); 

        this.http.post(this.endpoint, body, { headers: headers }).subscribe(res => {                                      
            this.results = res.json();
            console.dir(this.results['access_token']);
            //localStorage.setItem('username', user);
            //localStorage.setItem('access_token_password_grant', this.results['access_token']);
            sessionStorage.setItem('username', user);
            sessionStorage.setItem('access_token_password_grant', this.results['access_token']);
            
            console.log("save access token into sessionStorage");
            return true;
        });      
        
        return false;
    }

    logout(): any {
        //localStorage.removeItem('username');
        sessionStorage.removeItem('username');
    }

    getUser(): any {
        //return localStorage.getItem('username');
        return sessionStorage.getItem('username');
    }

    isLoggedIn(): boolean {
        return this.getUser() !== null;
    }
}


export const AUTH_PROVIDERS: Array<any> = [
    { provide: AuthService, useClass: AuthService }
];
