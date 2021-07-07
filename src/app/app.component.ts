import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from 'src/app/coreModule/Services/apiService/api-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  usersArray:any = [];
  
ngOnInit():void{
 this.getsAllJson();
   
}

  constructor(private apiServices: ApiServiceService){}
 
  // getAllUsers(): any {
  //   return this.apiServices.getAllRandomUsers().subscribe((datas: any) =>{
  //      this.listArray = datas.results;
  //   })
  // }

  getsAllJson(): any{
    return this.apiServices.getAllJsonApiUsers().subscribe((jsonData: any) =>{
      this.usersArray = jsonData;
  })
}

  // generateUsers(){
  //   return this.apiServices.getAllRandomUsers().subscribe((datas: any) =>{
  //     this.listArray = datas.results;
    
  //  })
  // }
}
