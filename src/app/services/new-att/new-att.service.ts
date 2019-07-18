import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class NewAttService {
  server: String = 'http://localhost:3000/';
  user : any;
  authToken: any;


  constructor( private http: HttpClient,
               private jwtHelper: JwtHelperService)
  {
   }
//add a new attraction

  addAttraction(attration): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>(this.server + 'attraction/add', attration, {headers: headers})
  }

//
// //get an newAtt from the database
//   getNewatt(newattId)
//   {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/json");
//     return this.http.post(this.server + 'new-att/' + newAttId, {}, {headers: headers})
//       .map(res => res.json());
//   }
//
// //delete an newAtt from the database
//   deleteNewatt(newattId)
//   {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/json");
//     return this.http.delete(this.server + 'new-att/' + newAttId, {headers: headers})
//       .map(res => res.json());
//   }
//
// //edit an new-att in the database
// //editNewatt(newattId, newAtt)
// {
//   let headers = new Headers();
//   headers.append("Content-Type", "application/json");
//   return this.http.put(this.server + 'new-att/' + newAttId, newAtt, {headers: headers})
// .map(res => res.json());
// }
//
//
//
// //add an new-att to favorites
// favNewatt(newAttId, userId)
// {
//   let headers = new Headers();
//   headers.append("Content-Type", "application/json");
//   return this.http.post(this.server + 'new-att/' + newattId + '/favorite', {
//     newAttId: newAttmId,
//     userId: userId
//   }, {headers: headers})
//     .map(res => res.json());
// }
//
// //remove an new-att from favorites
// var unfavnewAttId;
// //unfavnewAttId, userId)
// {
//   let headers = new Headers();
//   headers.append("Content-Type", "application/json");
//   return this.http.post(this.server + 'new-att/' + newattId + '/unfavorite', {
//     newAttId: newAttmId,
//     userId: userId
//   }, {headers: headers})
//     .map(res => res.json());
// }
//

}








