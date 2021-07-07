import { Injectable } from '@angular/core';
import  { HttpClient} from '@angular/common/http'
import { Users } from 'src/app/coreModule/Models/user/user';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  user: Users[]=[]

  constructor(private httpClient: HttpClient) { }
  apiUrl: string  = 'https://randomuser.me/api/';
  jsonApi: string = 'https://jsonplaceholder.typicode.com/users'

  getAllRandomUsers(): any{
    return this.httpClient.get(this.apiUrl)
  }

  getAllJsonApiUsers(){
    return this.httpClient.get(this.jsonApi)
  }

 

}
