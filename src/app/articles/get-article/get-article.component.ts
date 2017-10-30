import { 
    Component, 
    OnInit 
} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Article } from '../../_models/article';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-get-article',
    templateUrl: './get-article.component.html',
    styleUrls: ['./get-article.component.css']
})
export class GetArticleComponent implements OnInit {
    id: string;
    endpoint: string = 'http://localhost:8000/api/article/';
    article: Article;

    constructor(private http: Http, private route: ActivatedRoute) {
        route.params.subscribe(params => { 
            this.id = params['id']; 
            console.log("constructor:" + this.id);

            // 2017-10-30            
            this.http.request(this.endpoint + this.id)        
                .subscribe((res: Response) => {
                    this.article = res.json();
            });
        });
    }

    ngOnInit() {
        //this.http.request('http://localhost:8000/api/article/' + this.id)
//        this.http.request(this.endpoint + this.id)        
//            .subscribe((res: Response) => {
//                console.log("ngOnInit");
//                console.dir(res);
//                this.article = res.json();
//        });
    }
    
    
    updateArticle(name: HTMLInputElement, description: HTMLInputElement): void {
        //this.http.put('http://localhost:8000/api/article/' + this.id,        
        this.http.put(this.endpoint + this.id,                
            {
                name: name.value,
                description: description.value
        })
        .subscribe((res: Response) => {
            console.dir(res);
            console.dir(res.statusText);
        });
    }     
}