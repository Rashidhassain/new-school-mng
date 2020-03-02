import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Register } from './models/model';
import { Observable } from 'rxjs';


const endpoint = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  httpOptions: any;
  constructor(private http: HttpClient, ) { }
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }
  sendToken(accessToken: string) {

    localStorage.setItem('LoggedInUser', accessToken);
  }

  getToken() {
    // localStorage.removeItem("LoggedInUser");

    return localStorage.getItem('LoggedInUser');
  }
  isLoggednIn() {
    return this.getToken() !== null;
  }
  sendRole(role) {
    localStorage.setItem('LoggedInRole', role);
  }
  getRole() {
    return localStorage.getItem('LoggedInRole');
  }
  sendId(id) {
    localStorage.setItem('LoggedInUserId', id);
  }
  getId() {
    return localStorage.getItem('LoggedInUserId');
  }

  logout() {
    localStorage.removeItem('LoggedInUser');
    localStorage.removeItem('LoggedInUserId');
    localStorage.removeItem('LoggedInRole');

  }

  doRegister(data: Register): Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<Register>(endpoint + 'api/auth/signup', data, this.httpOptions);
  }


}
