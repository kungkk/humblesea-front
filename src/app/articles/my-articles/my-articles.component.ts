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
  selector: 'app-my-articles',
  templateUrl: './my-articles.component.html',
  styleUrls: ['./my-articles.component.css']
})
export class MyArticlesComponent implements OnInit {
    endpoint: string = environment.api_url + '/my-articles/';
    articles: Article[];

    constructor(private http: Http) { 
        
    }

    ngOnInit() {
        //let headers = new Headers({'Authorization': 'Bearer ' + localStorage.getItem('access_token_password_grant') });
        let headers = new Headers({'Authorization': 'Bearer ' + sessionStorage.getItem('access_token_password_grant') });
        //headers.append('Authorization', 'Bearer {{access_token}}'); 
        
        console.log("ngOnInit endpoint:" + this.endpoint);
        this.http.request(this.endpoint, { headers: headers })        
            .subscribe((res: Response) => {
                this.articles = res.json();
                this.articles = res.json()['data'];
        });
    }
    
    deleteArticle(id): boolean {
        console.log("del_id:" + id);
        
        this.http.delete(this.endpoint + id)        
        .subscribe((res: Response) => {
            console.dir(res);
            console.dir(res.statusText);

            // reload the articles json            
            this.http.request(this.endpoint)            
                .subscribe((res: Response) => {
                    this.articles = res.json();
            });
        });
        
        return false;
    }      
}