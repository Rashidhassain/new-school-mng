import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Register, Handled } from './models/model';
// tslint:disable-next-line: import-spacing
import { Student }  from './models/model';

import { Observable } from 'rxjs';


const endpoint = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  httpOptions: any;
  constructor(private http: HttpClient, ) { }
  private extractData(res: Response) {
    const body = res;
    return body || {};
  }
  sendToken(accessToken: string) {

    localStorage.setItem('LoggedInUser', accessToken);
  }

  getToken() {
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
  fetch():Observable<any>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token':this.getToken()

      })
    };

    return this.http.get<any>(endpoint + 'api/teacherList', this.httpOptions);
  }

  doRegister(data): Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(endpoint + 'api/auth/signup', data, this.httpOptions);
  }
  // parent
  doRegisters(data): Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(endpoint + 'api/auth/signups', data, this.httpOptions);
  }
  doLogin(data: Register): Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    return this.http.post<Register>(endpoint + 'api/auth/signin', data, this.httpOptions);
  }

  Login(data: any): Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    return this.http.post<any>(endpoint + 'api/auth/signinn', data, this.httpOptions);
  }


  doReg(data: Register): Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<Register>(endpoint + 'api/auth/signup', data, this.httpOptions);
  }


// handled Crud Operation

  clas(data:Handled): Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token':this.getToken()

      })
    };

    return this.http.post<Register>(endpoint + 'class/add', data, this.httpOptions);
  }

  clasfetch(): Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token':this.getToken()

      })
    };

    return this.http.get<Handled>(endpoint + 'class/fetch', this.httpOptions);
  }
  clasfetchOne(id): Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token':this.getToken()

      })
    };

    return this.http.get<Handled>(endpoint + 'class/edit/'+id, this.httpOptions);
  }

update(data:Handled,id): Observable<any> {
  this.httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token':this.getToken()

    })
  };

  return this.http.put<Handled>(endpoint + 'class/update/'+id, data, this.httpOptions);
}


  dlt(id){
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token':this.getToken()

      })
    };

    return this.http.delete<Handled>(endpoint + 'class/delete/'+id,  this.httpOptions);

  }
  // end Of Class Crud operation

  /* student crud operation */
  clas1(data1:Student): Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token':this.getToken()

      })
    };

    return this.http.post<Student>(endpoint + 'clas1/add1', data1, this.httpOptions);
  }
  clasfetch1(): Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token':this.getToken()

      })
    };

    return this.http.get<Student>(endpoint + 'clas/fetch1', this.httpOptions);
  }
  dlt1(id){
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token':this.getToken()

      })
    };

    return this.http.delete<Student>(endpoint + 'clas/delete/'+id,  this.httpOptions);

  }


  // tslint:disable-next-line: adjacent-overload-signatures
  update1(data1:Student,id): Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token':this.getToken()

      })
    };

    return this.http.put<Student>(endpoint + 'clas/update/'+id, data1, this.httpOptions);
  }

  // tslint:disable-next-line: adjacent-overload-signatures
  clasfetch1One(id): Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token':this.getToken()

      })
    };

    return this.http.get<Student>(endpoint + 'clas/edit/'+id, this.httpOptions);
  }
  /* student crud operation ends */



}
