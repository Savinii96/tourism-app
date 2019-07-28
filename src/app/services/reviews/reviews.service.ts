// import {Injectable} from '@angular/core';
// import {HttpModule, Http, Headers} from "@angular/http";
// import 'rxjs/add/operator/map'
//
// @Injectable()
// export class ReviewService {
//   // server: String = "http://localhost:3000/";
//   server: String = "";
//
//   constructor(
//     private http: Http
//   ) {
//   }
//
//   //add a review
//   addReview(itemId, itemType, review) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/json");
//     return this.http.post(this.server + itemType + 's/' + itemId + '/reviews/', review, {headers: headers})
//       .map(res => res.json());
//   }
//
//   //get a review from the database
//   getReview(reviewId, itemId, itemType) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/json");
//     return this.http.get(this.server + itemType + 's/' + itemId + '/reviews/' + reviewId, {headers: headers})
//       .map(res => res.json());
//   }
//
//   //delete a review
//   deleteReview(reviewId, itemId, itemType) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/json");
//     return this.http.delete(this.server + itemType + 's/' + itemId + '/reviews/' + reviewId, {headers: headers})
//       .map(res => res.json());
//   }
//
//   //edit a review
//   editReview(reviewId, itemId, itemType, editedReview) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/json");
//     return this.http.put(this.server + itemType + 's/' + itemId + '/reviews/' + reviewId, editedReview, {headers: headers})
//       .map(res => res.json());
//   }
// }
