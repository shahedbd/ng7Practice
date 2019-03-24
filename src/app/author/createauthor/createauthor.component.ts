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
    private ps: PostService) { }

  profileForm = this.fb.group({
    title: ['', Validators.required],
    author: ['']
  });

  async onSubmit() {
    // TODO: Use EventEmitter with form value
    // console.warn(this.profileForm.value.title);

    this.ps.addPosts(this.profileForm.value.title, this.profileForm.value.author);
    await delay(300);
    this.router.navigate(['Author']);
    // console.warn(this.profileForm.value);
  }
  ngOnInit() {
  }

}
