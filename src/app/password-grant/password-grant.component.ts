import { Component, OnInit } from '@angular/core';

import { Http, Headers } from '@angular/http';

import { environment } from '../../environments/environment';

@Component({
    selector: 'app-password-grant',
    templateUrl: './password-grant.component.html',
    styleUrls: ['./password-grant.component.css']
})
export class PasswordGrantComponent implements OnInit {
    results: Object[];
    endpoint: string = environment.oauth_token_url;

    constructor(private http: Http) { 
        var body = "grant_type=password" + 
            "&client_id=" + environment.user_oauth_client_id +
            "&client_secret=" + environment.user_oauth_client_secret +
            "&scope=" + environment.user_oauth_scope + 
            "&username=kungkk@goodytechnologies.com" + 
            "&password=ilovegoody25";
        
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        //headers.append('Authorization', 'Bearer {{access_token}}'); 

        this.http.post(this.endpoint, body, { headers: headers }).subscribe(res => {                                      
            this.results = res.json();
            console.dir(this.results['access_token']);
            localStorage.setItem('access_token_password_grant', this.results['access_token']);
            console.log("save access token into localStorage");
        });      
    }

    ngOnInit() {
    }
}