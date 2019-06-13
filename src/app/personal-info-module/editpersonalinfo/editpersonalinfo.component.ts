import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'q';
import { GenericService } from '../../DataService/generic.service';


@Component({
  selector: 'app-editpersonalinfo',
  templateUrl: './editpersonalinfo.component.html',
  styleUrls: ['./editpersonalinfo.component.scss']
})
export class EditpersonalinfoComponent implements OnInit {

  angForm: FormGroup;
  data: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private genericService: GenericService,
    private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      Name: ['', Validators.required],
      DateofBirth: ['', Validators.required],
      MobileNo: ['', Validators.required],
      Country: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.genericService.getById(params['id']).subscribe(result => {
        this.data = result;
      });
    });
  }

  async onSubmit() {
  }

  updatePersonalInfo() {
    if (!this.angForm.valid) { return; }

    const formData: any = Object.assign({}, this.angForm.value);
    this.route.params.subscribe(async params => {
      this.genericService.update(params['id'], formData);
      await delay(1);
      this.ngOnInit();
      this.router.navigate(['PersonalInfo']);
    }, err => {
      scroll(0, 0);
    });
  }

}
