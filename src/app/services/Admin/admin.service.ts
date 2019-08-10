import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  server: String = 'http://localhost:3000/';

  constructor(
    private http: HttpClient,

  ) { }


  getAttractions(): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<any>(this.server + 'attraction/getAll',  {headers: headers})
  }

  acceptReq(id,email): Observable <any> {

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put<any>(this.server + 'attraction/accept',{id:id,email:email}, {headers: headers})
  }

  rejectReq(id,email): Observable <any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put<any>(this.server + 'attraction/reject', {id:id,email:email}, {headers: headers})
  }
}

