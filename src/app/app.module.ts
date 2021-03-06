import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { ShowUsersComponent } from './userComponent/show-users/show-users.component';
import { CreateUserComponent } from './userComponent/create-user/create-user.component';
import { SigninUserComponent } from './userComponent/signin-user/signin-user.component';

import {JwtModule} from '@auth0/angular-jwt';

import { FormsModule } from '@angular/forms';
import { InscriptionComponent } from './Views/inscription/inscription.component';

import { RouterModule } from '@angular/router';
import { AdminComponent } from './Views/admin/admin.component';
import { ConnexionComponent } from './Views/connexion/connexion.component';
import { WaitingComponent } from './Views/waiting/waiting.component';
import { PasswordUserComponent } from './userComponent/password-user/password-user.component';
import { PasswordComponent } from './Views/password/password.component';
import { MailRedirectComponent } from './Views/mail-redirect/mail-redirect.component';
import { ConfirmEqualValidatorDirective } from 'src/app/shared/confirm-equal-validator.directive';
import { from } from 'rxjs';
import { AuthGuard } from 'src/guards/auth-guard.service';
import { ToastrModule } from 'ngx-toastr';

export function tokenGetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    ShowUsersComponent,
    CreateUserComponent,
    InscriptionComponent,
    AdminComponent,
    ConnexionComponent,
    SigninUserComponent,
    WaitingComponent,
    PasswordUserComponent,
    PasswordComponent,
    MailRedirectComponent,
    ConfirmEqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ToastrModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:5000","localhost:5001"],
        blacklistedRoutes: []
      }
    })


  ],
  providers: [
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


