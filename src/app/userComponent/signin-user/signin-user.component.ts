import { Component, OnInit } from '@angular/core';
import { CoApiService } from '../../Service/co-api.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin-user',
  templateUrl: './signin-user.component.html',
  styles: [
  ]
})
export class SigninUserComponent implements OnInit {
  myName = 'test';
  
  constructor(public coApiService: CoApiService, private router: Router) { 
  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.coApiService.formData = {
      id: 0,
      login: "empty",
      email: '',
      password: '',
      confirmPassword:'',
      firstName: '',
      lastName: '',
      tokenApi:'',
      TokenSkytap:'',
      idSkytap: '',
    }
  }

   onSubmit(form: NgForm) {
    this.postUserSignIn(form);
  }


  postUserSignIn(form: NgForm) {
    this.coApiService.postUserSignIn().subscribe(
      res => {
        this.myName = res.url;
      console.log(res);
        this.resetForm(form);
        
        this.router.navigate(['/waiting'], { state: { skyTapUrl: res.url } });
      },
      err => { console.log(err); }
    )
  }




}
