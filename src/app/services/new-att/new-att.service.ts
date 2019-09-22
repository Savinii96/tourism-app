import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class NewAttService {
  // server: String = 'http://localhost:3000/';
  server: String = 'https://tourism-server.herokuapp.com/';
    user : any;
  authToken: any;


  constructor( private http: HttpClient,
               private jwtHelper: JwtHelperService)
  {
   }
//add a new attraction
  addAttraction(attraction): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>(this.server + 'attraction/add', attraction, {headers: headers})
  }

  getAttractions(): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<any>(this.server + 'attraction/getAll',  {headers: headers})
  }

  getAttractionById(id): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<any>(this.server + 'attraction/get/'+id,  {headers: headers})
  }
 
  
  addReview(review): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>(this.server + 'review/add', review, {headers: headers})
  }

  getReview(): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<any>(this.server + 'review/getAll',  {headers: headers})
  }

  getReviewById(id): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<any>(this.server + 'review/get/'+id,  {headers: headers})
  }

  addRating(rating): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>(this.server + 'rating/add', rating, {headers: headers})
  }

  getRating(): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<any>(this.server + 'rating/getAll',  {headers: headers})
  }

  getRatingById(id): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<any>(this.server + 'rating/get/'+id,  {headers: headers})
  }



}








