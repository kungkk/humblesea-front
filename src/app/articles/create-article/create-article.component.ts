import { 
    Component, 
    OnInit,
    Input,
    HostBinding
} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Article } from '../../_models/article';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
    @Input() article: Article;
    endpoint: string = environment.api_url + '/article';
   

    constructor(private http: Http) { 
    }

    ngOnInit() {
    }

    createArticle(title: HTMLInputElement, description: HTMLInputElement): void {
        this.http.post(this.endpoint,{ title: title.value,
            description: description.value
        })
        .subscribe((res: Response) => {
            //this.data = res.json();
            console.dir(res);
            title.value = '';
            description.value = '';      
        });
    }      
}