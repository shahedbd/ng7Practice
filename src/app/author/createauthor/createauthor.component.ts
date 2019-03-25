import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { PostService } from '../../DataService/post.service';
import { Router } from '@angular/router';
import { delay } from 'q';

@Component({
  selector: 'app-createauthor',
  templateUrl: './createauthor.component.html',
  styleUrls: ['./createauthor.component.scss']
})
export class CreateauthorComponent implements OnInit {
  private regForm: any;
  constructor(private fb: FormBuilder,
    private router: Router,
    private postService: PostService) { }

  postForm = this.fb.group({
    title: ['', Validators.required],
    author: ['']
  });

  async onSubmit() {
  }

  save() {
    if (!this.postForm.valid) { return; }

    const formData: any = Object.assign({}, this.postForm.value);
    this.postService
      .addPost(formData)
      .subscribe(res => {
        this.router.navigate(['Author']);
      }, err => {
        scroll(0, 0);
      });
  }


  ngOnInit() { }
}
