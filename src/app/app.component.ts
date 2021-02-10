import { Component } from '@angular/core';
import { User } from './Models/user.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isAuthenticated: boolean;
  constructor(private router: Router) {
  }


  logOut() {
    localStorage.removeItem("jwt");
    this.router.navigate(['/connexion']);
  }

  ngOnInit() {
  
      if (localStorage.getItem("jwt")) {
        this.isAuthenticated = true;
      }
      else {
        this.isAuthenticated = false;
      }
  }


}
