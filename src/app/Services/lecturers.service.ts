import { Injectable } from '@angular/core';
import  { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LecturersService {

  constructor(public httpClient: HttpClient) { }
  apiUrl = 'https://jsonplaceholder.typicode.com/users';
  
  getAllLecturers(){
   return  this.httpClient.get(this.apiUrl)
  }
}
