import { User } from '../Models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { UserSignIn } from '../Models/UserSignIn.model';
import { Url } from '../Models/url';
import { PasswordComponent } from '../Views/password/password.component';
import { Password } from '../Models/password';

@Injectable({
  providedIn: 'root'
})
export class CoApiService {
  
  formData: User;
  formDataPwd: Password;
  //FormDataSignIn: UserSignIn;
  url: String;
  readonly rootURL = 'https://localhost:5001/api/user/';
 
  list : User[];

  constructor(private http: HttpClient) { }

  refreshList(){
    this.http.get(this.rootURL)
    .toPromise()
    .then(res => this.list = res as User[]);
  }

  postUser() {
    return this.http.post(this.rootURL, this.formData);
  }

  putPassword() {
    return this.http.put(this.rootURL+"profil", this.formData);
  }

  postUserSignIn() {
    return this.http.post<Url>(this.rootURL+"signin", this.formData);
  }

  putUser() {
    return this.http.put(this.rootURL + this.formData.id, this.formData);
  } 

  deleteUser(id) {
    return this.http.delete(this.rootURL + id);
  }

  public getUser = (route: string) =>{
    return this.http.get(route);
  }

  
}