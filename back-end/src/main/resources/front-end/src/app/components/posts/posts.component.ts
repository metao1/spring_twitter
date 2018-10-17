import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from "../../model/model.user";
import {Post} from "./post";
import {PostsService} from "../../services/posts.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class PostsComponent implements OnInit {
  items: Post[] = [];
  currentUser: User;

  constructor(public postService: PostsService, public  http: HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.getPosts();
  }

  getPosts(): void {
    let headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    this.http.get(AppComponent.API_URL + "/account/token").subscribe(data => {
      const token = data['token'];
      headers = headers.set('X-Auth-Token', token);
      headers = headers.set('Accept', 'application/json');
      this.postService.getPosts(this.currentUser, headers)
        .subscribe(result => {
            if (result) {
              this.items = result;
            }
          },
          error => console.log(error)
        );
    });
  }

  ngOnInit() {

  }

}
