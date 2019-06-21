import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule} from "@angular/common/http";
// import 'rxjs/add/operator/map'
import {User} from "../../object-classes/user";
import {Observable} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  server: String = 'http://localhost:3000/';
  authToken: any;
  user: any;

  constructor(
    private http: HttpClient
  ) {
  }

  registerUser(user: User): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>(this.server + 'users/register', user, {headers: headers})
  }
}
