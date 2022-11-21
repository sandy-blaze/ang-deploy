import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private httpClient: HttpClient) { }
  getdata() {
    let url = 'http://jsonplaceholder.typicode.com/';
    return this.httpClient.get(url);
  }
}
