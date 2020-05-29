
import { Component, OnInit } from '@angular/core';
import { CoApiService } from '../../Service/co-api.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {ActivatedRoute, ParamMap } from '@angular/router';

import { ConfirmEqualValidatorDirective } from 'src/app/shared/confirm-equal-validator.directive';

@Component({
  selector: 'app-password-user',
  templateUrl: './password-user.component.html',
  styleUrls: ['./password-user.component.scss']
})

export class PasswordUserComponent implements OnInit {

  constructor(public coApiService: CoApiService, private router: Router, private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.coApiService.formData = {
      id: 0,
      login: 'empty',
      email: this.route.snapshot.paramMap.get('email'),
      password: '',
      confirmPassword:'',
      firstName: '',
      lastName: '',
      tokenApi:'empty',
      TokenSkytap:'empty',
      idSkytap: 'empty',
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
