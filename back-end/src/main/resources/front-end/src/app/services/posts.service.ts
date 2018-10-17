import {AppComponent} from "../app.component";
import {Post} from "../components/posts/post";
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import 'rxjs/add/observable/throw';
import {User} from "../model/model.user";

@Injectable()
export class PostsService {

  constructor(public http: HttpClient) {

  }

  getPosts(user: User, headers: HttpHeaders): Observable<Post[]> {

    return this.http.get<Post[]>(AppComponent.API_URL + "/account/" + user.id + "/posts", {headers: headers});
  }

}
