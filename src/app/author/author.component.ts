import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'q';
import { Observable } from 'rxjs';
import Post from '../DataService/post';
import { PostService } from '../DataService/post.service';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})


export class AuthorComponent implements OnInit {

  data: any;
  posts: Post[];

  constructor(private ps: PostService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.ps
      .getPostsInfo()
      .subscribe((data: Post[]) => {
        this.posts = data;
        // console.log(data);
      });
  }

  async deletePosts(id) {
    this.route.params.subscribe(async params => {
      this.ps.deletePosts(id);
      // this.loadAllPost();
      // window.location.reload();
      await delay(300);
      this.ps
      .getPostsInfo()
      .subscribe((data: Post[]) => {
        this.posts = data;
        // console.log('KKK');
      });

    });
  }
}
