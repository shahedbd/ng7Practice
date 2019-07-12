import { Component, OnInit } from '@angular/core';
import { User } from '../user/_models';
import { Router } from '@angular/router';
import { AuthenticationService } from '../user/_services';
import { Observable } from 'rxjs';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Inject, Injectable } from '@angular/core';

const STORAGE_KEY = 'isLogin';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  currentUser: User;
  isLoggedIn$: Observable<boolean>;
  public show = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    @Inject(SESSION_STORAGE) private storage: StorageService,
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.storage.set(STORAGE_KEY, false);
    // this.show = !this.show;
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.isLoggedIn$ = this.authenticationService.isLoggedIn;
    const abc = this.storage.get('isLogin');
    if (abc === true) {
      this.show = !this.show;
      console.log(101);
    } else {
      this.show = !this.show;
      console.log(202);
    }
  }

}
