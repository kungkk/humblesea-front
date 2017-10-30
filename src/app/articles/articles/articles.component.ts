import { 
    Component, 
    OnInit,
    Input,
    HostBinding
} from '@angular/core';
import {
    Http, 
    Response
} from '@angular/http';
import { Article } from '../../_models/article';

// decorator
@Component({
    selector: 'articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.css']
})

export class ArticlesComponent implements OnInit {
    endpoint: string = 'http://localhost:8000/api/article/';
    articles: Article[];

    constructor(private http: Http) { 
        
    }

    ngOnInit() {
        this.http.request('http://localhost:8000/api/articles')
            .subscribe((res: Response) => {
                this.articles = res.json();
        });
    }
    
    deleteArticle(id): boolean {
        console.log("del_id:" + id);
        
        this.http.delete(this.endpoint + id)        
        .subscribe((res: Response) => {
            console.dir(res);
            console.dir(res.statusText);

            // reload the articles json            
            this.http.request('http://localhost:8000/api/articles')
                .subscribe((res: Response) => {
                    this.articles = res.json();
            });
        });
        
        return false;
    }     
}