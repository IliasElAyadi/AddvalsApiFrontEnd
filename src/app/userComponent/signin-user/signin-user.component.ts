import { Component, OnInit } from '@angular/core';
import { CoApiService } from '../../Service/co-api.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CurrentUser } from 'src/app/Models/CurrentUser';


@Component({
  selector: 'app-signin-user',
  templateUrl: './signin-user.component.html',
  styles: [
  ]
})
export class SigninUserComponent implements OnInit {
  myName = 'test';
  invalidLogin: boolean;
  helper= new JwtHelperService();

  currentUser: CurrentUser = {
    email: null,
    id: null,
    firstName: null,
    lastName: null,
    role: null,
  };

  constructor(public coApiService: CoApiService, private router: Router) { 
  }

  ngOnInit() {
    if (localStorage.getItem('jwt') != null)
      this.router.navigateByUrl('/');
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.coApiService.formData = {
      id: 0,
      login: "/",
      email: '',
      password: '',
      confirmPassword:'',
      firstName: '',
      lastName: '',
      company: '',
      group: '',
      tokenApi:'',
      TokenSkytap:'',
      idSkytap: '',
    }
  }

   onSubmit(form: NgForm) {
    this.postUserAuthenticate(form);
  }


  postUserAuthenticate(form: NgForm) {
    this.coApiService.postUserAuthenticate().subscribe(
      res => {
       // this.myName = res.url;
        this.myName = (<any>res).urlFinal;
        const token = (<any>res).token;       

        const decodedToken = this.helper.decodeToken(token)
        localStorage.setItem("jwt",token);
        this.currentUser.role = decodedToken.role
        this.invalidLogin = false;
        //console.log(res);
       // this.resetForm(form);

        if(this.currentUser.role == "Admin")
        {          
          this.router.navigate(['/admin']);
        }
        else{
          
          //this.router.navigate(['/waiting'], { state: { skyTapUrl: res.url } });
          this.router.navigate(['/waiting'], { state: { skyTapUrl: this.myName } });
        }
        
        //this.router.navigate(['/'])    
      },
      err => { this.invalidLogin = true; console.log(err);}
    )
  }




}
