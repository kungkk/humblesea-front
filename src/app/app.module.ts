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


// services
import { AuthService } from './-services/auth.service';
import { LoginComponent } from './login/login.component';
import { ProtectedComponent } from './protected/protected.component';
import { ClientCredentialsComponent } from './client-credentials/client-credentials.component';
import { PasswordGrantComponent } from './password-grant/password-grant.component';

// might be got duplicated code with AuthService
import { AUTH_PROVIDERS } from './-services/auth.service';
import { LoggedInGuard } from './logged-in.guard';
import { SiteArticlesComponent } from './articles/site-articles/site-articles.component';
import { MyArticlesComponent } from './articles/my-articles/my-articles.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'site-articles', component: SiteArticlesComponent },
    { path: 'my-articles', component: MyArticlesComponent },
    { path: 'articles', component: ArticlesComponent },
    { path: 'create-article', component: CreateArticleComponent },
    { path: 'article/:id', component: GetArticleComponent },
    { path: 'login', component: LoginComponent },
    { path: 'client_credentials', component: ClientCredentialsComponent },
    { path: 'password_grant', component: PasswordGrantComponent },
    { path: 'protected', component: ProtectedComponent, canActivate: [ LoggedInGuard ] },
];


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        ArticlesComponent,
        CreateArticleComponent,
        GetArticleComponent,
        LoginComponent,
        ProtectedComponent,
        ClientCredentialsComponent,
        PasswordGrantComponent,
        SiteArticlesComponent,
        MyArticlesComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes),    
    ],
    providers: [
        AuthService,
        AUTH_PROVIDERS,
        LoggedInGuard,
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        { provide: APP_BASE_HREF, useValue: '/' }
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
