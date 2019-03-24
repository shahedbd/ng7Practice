import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  url = 'http://localhost:3000/posts';
  constructor(private http: HttpClient) { }

  getPostsInfo() {
    return this.http.get(`${this.url}`);
  }

  addPosts(title, author) {
    const obj = {
      title: title,
      author: author
    };
    // console.log(obj);
    this.http.post(`${this.url}`, obj)
      .subscribe(res => console.log('Done'));
  }


  updatePostsGet(id) {
    return this
      .http
      .get(`${this.url}/${id}`);
  }

  updatePosts(title, author, id) {
    const obj = {
      title: title,
      author: author
    };
    this
      .http
      .put(`${this.url}/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }
  deletePosts(id) {
    return this
      .http
      .delete(`${this.url}/${id}`)
      .subscribe(res => console.log('Deleted. ID: ' + id));
  }
}

