import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // server: String = 'http://localhost:3000/';
  server: String = 'https://tourism-server.herokuapp.com/';
    authToken: any;
  user: any;

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) {
  }

  registerUser(user): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>(this.server + 'users/register', user, {headers: headers})
  }

  authenticateUser(user): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>(this.server + 'users/authenticate', user, {headers: headers})
  }

  getProfile(): Observable<any> {
    this.loadToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': this.authToken
      })
    };

    return this.http.get<any>(this.server + 'users/profile', httpOptions)
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  loadToken() {
    this.authToken = localStorage.getItem('id_token');
  };

  loggedIn() {
    return this.tokenNotExpired();
  }

  isAdmin(){
    if(localStorage.getItem('user')!=null){
      const user =JSON.parse(localStorage.getItem('user'))
      if(user.access==='admin'){
        return true;
      }else{
        return false
      }
    }else{
      return false
    }
  }


  tokenNotExpired() {
    this.loadToken();
    return this.authToken != null && !this.jwtHelper.isTokenExpired(this.authToken);
  }
}
