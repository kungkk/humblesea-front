import { 
    Component, 
    OnInit 
} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Article } from '../../_models/article';
import { ActivatedRoute } from '@angular/router';

import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-get-article',
    templateUrl: './get-article.component.html',
    styleUrls: ['./get-article.component.css']
})
export class GetArticleComponent implements OnInit {
    id: string;
    endpoint: string = environment.api_url + '/article/';
    article: Article;

    constructor(private http: Http, private route: ActivatedRoute) {
        route.params.subscribe(params => { 
            this.id = params['id']; 
            console.log("constructor:" + this.id);

            this.http.request(this.endpoint + this.id)        
                .subscribe((res: Response) => {
                    //this.article = res.json();
                    this.article = res.json()['data'];
            });
        });
    }

    ngOnInit() {
        
    }
    
    
    updateArticle(title: HTMLInputElement, description: HTMLInputElement): void {
        this.http.put(this.endpoint + this.id,                
            {
                title: title.value,
                description: description.value
        })
        .subscribe((res: Response) => {
            console.dir(res);
            console.dir(res.statusText);
        });
    }     
}