import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  url = 'http://localhost:3000/posts';
  constructor(private http: HttpClient) { }

  getPostsInfo() {
    return this.http.get(`${this.url}`);
  }

  addPost(body): Observable<any> {
    return this.http.post(`${env.api}/posts`, body);
  }


  updatePostsGet(id) {
    return this
      .http
      .get(`${this.url}/${id}`);
  }

  updatePosts(body, id) {
    this.http.put(`${this.url}/${id}`, body)
      .subscribe(res => console.log('Done'));
  }

  updatePostsN(body, id): Observable<any> {
    console.log(`${env.api}/${id}`);
    return this.http.put(`${env.api}/${id}`, body);
  }

  deletePosts(id) {
    return this
      .http
      .delete(`${this.url}/${id}`)
      .subscribe(res => console.log('Deleted. ID: ' + id));
  }

  deletePostsN(id): Observable<any> {
    return this.http.delete(`${env.api}/posts/${id}`);
  }
}

