import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  email:string;
  password:string;
  error:string;
  

  
  constructor(private router: Router) { }

  ngOnInit():void {

       
  }

 
  LoginUser(){
      // this.email="abcadmin@live.com";
      // this.password="admin2";
     
    
    if(this.email == "tmcadmin@live.com" && this.password=="admin1" )
      {
        console.log("Inside Login User");
        this.router.navigate(['slandingpg']);
        console.log("Welcome ");
      }
      else{
        window.alert("Invalid Email or Password !!!! Please try again");
       
      }
      //   // this.auth.login(this.email, this.password)
      //   // .pipe(first())
      //   //  .subscribe(
      //   // result => this.router.navigate(['slandingpg']),
      //   // err => this.error = 'Could not authenticate'
      // );





      }
    
      
     
  }
     

  

