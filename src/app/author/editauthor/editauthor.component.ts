import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { delay } from 'q';
import { PostService } from '../../DataService/post.service';


@Component({
  selector: 'app-editauthor',
  templateUrl: './editauthor.component.html',
  styleUrls: ['./editauthor.component.scss']
})
export class EditauthorComponent implements OnInit {

  angForm: FormGroup;
  posts: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required]
    });
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postService.updatePostsGet(params['id']).subscribe(res => {
        this.posts = res;
      });
    });
  }

  async onSubmit() {
  }

  updatePosts() {
    if (!this.angForm.valid) { return; }

    const formData: any = Object.assign({}, this.angForm.value);
    this.route.params.subscribe(async params => {
      this.postService.updatePosts(formData, params['id']);
      await delay(1);
      this.ngOnInit();
      this.router.navigate(['Author']);
    }, err => {
      scroll(0, 0);
    });
  }

}
