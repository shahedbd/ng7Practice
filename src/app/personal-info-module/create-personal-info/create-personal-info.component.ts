import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenericService } from '../../DataService/generic.service';

@Component({
  selector: 'app-create-personal-info',
  templateUrl: './create-personal-info.component.html',
  styleUrls: ['./create-personal-info.component.scss']
})
export class CreatePersonalInfoComponent implements OnInit {
  private regForm: any;

  constructor(private fb: FormBuilder,
    private router: Router,
    private genericService: GenericService) { }

  postForm = this.fb.group({
    Name: ['', Validators.required],
    DateofBirth: [''],
    MobileNo: [''],
    Country: ['']
  });

  async onSubmit() {
  }

  save() {
    if (!this.postForm.valid) { return; }

    const formData: any = Object.assign({}, this.postForm.value);

    this.genericService.createNew(formData)
      .subscribe(res => {
        this.router.navigate(['PersonalInfo']);
      }, err => {
        // console.log(err);
        scroll(0, 0);
      });
  }

  ngOnInit() {
  }

}
