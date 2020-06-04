import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SlandingpgComponent } from './slandingpg/slandingpg.component';
import { CompanyinfoComponent } from './companyinfo/companyinfo.component';



const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
   path:'slandingpg',
   component:SlandingpgComponent
 },
 {
   path:'companyinfo',
   component:CompanyinfoComponent
 },

   // otherwise redirect to home
   { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
