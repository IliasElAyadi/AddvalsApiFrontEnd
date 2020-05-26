
import { Component, OnInit } from '@angular/core';
import { CoApiService } from '../../Service/co-api.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-user',
  templateUrl: './password-user.component.html',
  styleUrls: ['./password-user.component.scss']
})
export class PasswordUserComponent implements OnInit {
  constructor(public coApiService: CoApiService, private router: Router) { 
  }


  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.coApiService.formDataPwd = {
      login: '',
      password: '',
    }
  }

   onSubmit(form: NgForm) {
    this.putPassword(form);
  }


  putPassword(form: NgForm) {
    this.coApiService.putPassword().subscribe(
      res => {       
      console.log(res);
        this.resetForm(form);
        this.router.navigate(['/connexion']);
      },
      err => { console.log(err); }
    )
  }




}
