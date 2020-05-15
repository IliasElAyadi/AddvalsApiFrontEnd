import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriptionComponent } from './Views/inscription/inscription.component';
import { AdminComponent } from './Views/admin/admin.component';
import { ConnexionComponent } from './Views/connexion/connexion.component';
import { WaitingComponent } from './Views/waiting/waiting.component';


const routes: Routes = [
  
  { path: 'admin', component: AdminComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'waiting', component: WaitingComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
