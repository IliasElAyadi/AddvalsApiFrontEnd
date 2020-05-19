import { Component, OnInit } from '@angular/core';
import {CoApiService} from '../../Service/co-api.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styles: [
  ]
})
export class CreateUserComponent implements OnInit {

  constructor(public coApiService: CoApiService,private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }
  
  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.coApiService.formData = {
      id: 0,
      login: '',
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      token:' '
    }
  }  

   onSubmit(form: NgForm) {

    if (this.coApiService.formData.id == 0)
      
      this.postUser(form);
      
    else
      this.putUser(form); 
  }
  
  postUser(form: NgForm) {
    this.coApiService.postUser().subscribe(
      res => {
        this.resetForm(form);
        this.coApiService.refreshList();
        this.router.navigate(['/connexion']);

      },
      err => { console.log(err); }
    )
  }
  
  putUser(form: NgForm) {
    this.coApiService.putUser().subscribe(
      res => {
        this.resetForm(form);
        this.coApiService.refreshList();
        this.router.navigate(['/connexion']);
      },
      err => {
        console.log(err);
      }
    )
  }
  

  
  
}