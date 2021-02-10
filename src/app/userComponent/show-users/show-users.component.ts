import { Component, OnInit } from '@angular/core';
import {CoApiService} from '../../Service/co-api.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styles: [
  ]
})
export class ShowUsersComponent implements OnInit {

  constructor(public coApiService: CoApiService) { }

  ngOnInit() {
    this.coApiService.refreshList();
  } 
  
  populateForm(selectUser) {
    this.coApiService.formData = Object.assign({}, selectUser);
  }
 
  onDelete(id) {
    if (confirm('Are you sure to delete this user ?')) {
      this.coApiService.deleteUser(id)
        .subscribe(res => {
          this.coApiService.refreshList();
        },
        err => { console.log(err); })
    }
  }

}
