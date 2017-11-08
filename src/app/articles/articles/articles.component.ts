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

// decorator
@Component({
    selector: 'articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.css']
})

export class ArticlesComponent implements OnInit {
    //endpoint: string = 'http://localhost:8000/api/article/';
    endpoint: string = environment.api_url + '/site-articles/';
    articles: Article[];

    constructor(private http: Http) { 
        
    }

    ngOnInit() {
        //this.http.request('http://localhost:8080/api/articles')
        
        let headers = new Headers({'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
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
            //this.http.request('http://localhost:8000/api/articles')
            this.http.request(this.endpoint)            
                .subscribe((res: Response) => {
                    this.articles = res.json();
            });
        });
        
        return false;
    }     
}