import { Component, OnInit } from '@angular/core';
import { PersonalInfo } from '../personal-info';
import { PersonalInfoService } from '../personal-info.service';
import { Router, ActivatedRoute } from '@angular/router';
import { delay } from 'q';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  data: any;
  personalInfo: PersonalInfo[];

  // sorting
  key = 'id'; // set default
  reverse = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  constructor(private personalInfoService: PersonalInfoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.personalInfoService
      .getPersonalInfo()
      .subscribe((data: PersonalInfo[]) => {
        this.personalInfo = data;
      });
  }

  async deletePersonalInfo(id) {
    let itemDelete = false;

    await swal({
      title: 'Are you sure to delete it?',
      // text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      buttons: [
        'No',
        'Yes'
      ],
      dangerMode: true,
    }).then(async function (isConfirm) {
      if (isConfirm) {
        itemDelete = true;
        swal({
          title: 'Deleted',
          // text: 'Candidates are successfully shortlisted!',
          icon: 'success'
        }).then((result) => {
          if (result.value) {
          } else {
          }
        });
      } else {
        swal('Cancelled', '', 'error');
      }
    });

    if (itemDelete) {
      this.route.params.subscribe(async params => {
        this.personalInfoService.deletePersonalInfo(id);

        console.log(id);
        await delay(1);
        this.ngOnInit();
      });
    }

  }

}
