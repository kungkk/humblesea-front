import { 
    Component, 
    OnInit,
    Input,
    HostBinding
} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Article } from '../../_models/article';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
    @Input() article: Article;

    constructor(private http: Http) { 
    }

    ngOnInit() {
    }

    createArticle(name: HTMLInputElement, description: HTMLInputElement): void {
        console.log(name.value);
        
        this.http.post(
            'http://localhost:8000/api/article',
            {
                name: name.value,
                description: description.value
        })
        .subscribe((res: Response) => {
            //this.data = res.json();
            console.dir(res);
            name.value = '';
            description.value = '';      
        });
    }      
}