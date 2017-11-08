import { 
    Component, 
    OnInit,
    Input,
    HostBinding
} from '@angular/core';
import {
    Headers,
    Http, 
    Response
} from '@angular/http';
import { Article } from '../../_models/article';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-site-articles',
  templateUrl: './site-articles.component.html',
  styleUrls: ['./site-articles.component.css']
})
export class SiteArticlesComponent implements OnInit {
    endpoint: string = environment.api_url + '/site-articles/';
    articles: Article[];

    constructor(private http: Http) { 
        
    }

    ngOnInit() {
        let headers = new Headers({'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
        //headers.append('Authorization', 'Bearer {{access_token}}'); 
        
        console.log("ngOnInit endpoint:" + this.endpoint);
        this.http.request(this.endpoint, { headers: headers })        
            .subscribe((res: Response) => {
                this.articles = res.json();
                this.articles = res.json()['data'];
        });
    }
}