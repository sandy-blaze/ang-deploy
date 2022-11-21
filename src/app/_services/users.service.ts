import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient) { }
  /*
  getAllUsers(): Observable<any> {
    //  const apiUrl='https://jsonplaceholder.typicode.com/users';
    return this.httpClient.get(environment.apiUrl + '/userdata');
  }
  */

  createUser(data: { firstname: string; lastname: string; userMail: string; userPhNo: string; userPass: string; }):Observable<any>{
    return this.httpClient.post('http://localhost:3000/userdata', data);
  }
  getAllUsersfromLocal(data: string): Observable<any> {
    const params = { "condition" : data }
    return this.httpClient.get('http://localhost:3000/userdata', { params });
  }
  deleteUser(data: string): Observable<any> {
    const headers = { "userMail" : data }
    return this.httpClient.delete('http://localhost:3000/userdata', { headers });
  }
}
 
/*
getAllUsersfromLocal(): Observable<any> {
  return this.httpClient.get('http://localhost:3000/userdata');
}
*/