import { Component, OnInit } from '@angular/core';
import { User } from '../user/_models';
import { Router } from '@angular/router';
import { AuthenticationService } from '../user/_services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  currentUser: User;
  isLoggedIn$: Observable<boolean>;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.isLoggedIn$ = this.authenticationService.isLoggedIn;
  }

}
