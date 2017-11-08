import { Component, OnInit } from '@angular/core';

import { Http, Headers, URLSearchParams } from '@angular/http';


@Component({
  selector: 'app-client-credentials',
  templateUrl: './client-credentials.component.html',
  styleUrls: ['./client-credentials.component.css']
})
export class ClientCredentialsComponent implements OnInit {
    results: Object[];

    constructor(private http: Http) { 
        var body = "grant_type=client_credentials" + 
            "&client_id=5" +
            "&client_secret=Y425x8fRHe7JN3hkW2Ob5yI9EgMX0C8VZqvoiRMG" +
            "&scope=";
        
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        //headers.append('Authorization', 'Bearer {{access_token}}'); 


        this.http.post('http://localhost:8080/oauth/token', body, { headers: headers }).subscribe(res => {                                      
            this.results = res.json();
            console.dir(this.results['access_token']);
            localStorage.setItem('access_token', this.results['access_token']);
            console.log("save access token into localStorage");
        });      
    }

    ngOnInit() {
    }
}