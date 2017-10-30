import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
    APP_BASE_HREF,
    HashLocationStrategy,
    LocationStrategy,
} from '@angular/common';

import { FormsModule } from '@angular/forms';
import { 
    Headers,
    Http,
    HttpModule,
    Response,
    RequestOptions,
} from '@angular/http';

import {
    Routes,
    RouterModule,
} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ArticlesComponent } from './articles/articles/articles.component';
import { CreateArticleComponent } from './articles/create-article/create-article.component';
import { GetArticleComponent } from './articles/get-article/get-article.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'articles', component: ArticlesComponent },
    { path: 'create-article', component: CreateArticleComponent },
    { path: 'article/:id', component: GetArticleComponent },
];


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        ArticlesComponent,
        CreateArticleComponent,
        GetArticleComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes),    
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        { provide: APP_BASE_HREF, useValue: '/' }
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
