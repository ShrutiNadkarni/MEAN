import { Component, OnInit } from '@angular/core';
import {HttpClientModule,HttpClient} from '@angular/common/http'; 


@Component({
  selector: 'app-slandingpg',
  templateUrl: './slandingpg.component.html',
  styleUrls: ['./slandingpg.component.css']
})
export class SlandingpgComponent implements OnInit {
  

  constructor(private httpservice:HttpClient) { }
 // Emp:string[]; 
  
  ngOnInit(): void {
  //   this.httpservice.get('mongodb://localhost/company/companyinfos').subscribe(data=>    
  //     {    
  //       this.Emp = data as string [];      
  //     }); 
  // }
  //this.userinfo=Userinfo.find();
    
  }

}
