import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriptionComponent } from './Views/inscription/inscription.component';
import { AdminComponent } from './Views/admin/admin.component';
import { ConnexionComponent } from './Views/connexion/connexion.component';
import { WaitingComponent } from './Views/waiting/waiting.component';
import { PasswordComponent } from './Views/password/password.component';
import { MailRedirectComponent } from './Views/mail-redirect/mail-redirect.component';



const routes: Routes = [
  
  { path: 'admin', component: AdminComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'waiting', component: WaitingComponent },
  { path: 'password', component: PasswordComponent },
  { path: 'MailRedirect', component: MailRedirectComponent }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
