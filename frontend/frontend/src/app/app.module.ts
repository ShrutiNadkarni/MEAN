import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SlandingpgComponent } from './slandingpg/slandingpg.component';
import {RouterModule,Routes} from '@angular/router';
import { CompanyinfoComponent } from './companyinfo/companyinfo.component';
import {HttpClientModule, HttpClient} from '@angular/common/http'; 

const appRoutes:Routes=[
  
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


]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SlandingpgComponent,
    CompanyinfoComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule    
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
