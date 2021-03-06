import { Component, OnInit } from '@angular/core';

import { Http, Headers } from '@angular/http';

import {environment} from '../../environments/environment';


@Component({
  selector: 'app-client-credentials',
  templateUrl: './client-credentials.component.html',
  styleUrls: ['./client-credentials.component.css']
})
export class ClientCredentialsComponent implements OnInit {
    results: Object[];
    endpoint: string = environment.oauth_token_url;

    constructor(private http: Http) { 
        var body = "grant_type=client_credentials" + 
            "&client_id=" + environment.site_oauth_client_id +
            "&client_secret=" + environment.site_oauth_client_secret +
            "&scope=" + environment.site_oauth_scope;
        
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        //headers.append('Authorization', 'Bearer {{access_token}}'); 


        this.http.post(this.endpoint, body, { headers: headers }).subscribe(res => {                                      
            this.results = res.json();
            console.dir(this.results['access_token']);
            localStorage.setItem('access_token', this.results['access_token']);
            console.log("save access token into localStorage");
        });      
    }

    ngOnInit() {
    }
}