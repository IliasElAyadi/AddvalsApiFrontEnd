import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
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
