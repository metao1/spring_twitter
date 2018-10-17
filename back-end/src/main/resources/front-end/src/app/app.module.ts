import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {FormsModule} from '@angular/forms';
import {AuthService} from "./services/auth.service";
import {HttpModule} from "@angular/http";
import {AccountService} from "./services/account.service";
import {ProfileComponent} from './components/profile/profile.component';
import {routing} from "./app.routing";
import {FacebookModule} from "ngx-facebook";
import {UrlPermission} from "./urlPermission/url.permission";
import {PostsComponent} from './components/posts/posts.component';
import {PostsService} from "./services/posts.service";
import {NewPostComponent} from './components/new-post/new-post.component';
import {MainComponent} from './components/main/main.component';
import {XhrInterceptor} from "./configs/XhrInterceptor";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    PostsComponent,
    NewPostComponent,
    MainComponent
  ],
  providers: [AuthService, PostsService, AccountService, UrlPermission
    , {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true}],
  imports: [
    HttpClientModule,
    BrowserModule, HttpModule, FormsModule, routing, FacebookModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
