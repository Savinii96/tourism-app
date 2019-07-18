// import {Component, OnInit, Inject} from '@angular/core';
// import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
// import {ReviewService} from "../../../../services/reviews/review.service";
//
// @Component({
//   selector: 'app-add-review',
//   templateUrl: './add-review.component.html',
//   styleUrls: ['./add-review.component.css']
// })
// export class AddReviewDialog implements OnInit {
//   review: String;
//   rating: Number;
//   itemId: String = this.data.itemId;
//   itemType: String = this.data.itemType;
//
//   constructor(
//     private dialogRef: MatDialogRef<AddReviewDialog>,
//     @Inject(MAT_DIALOG_DATA) private data: any,
//     private reviewService: ReviewService
//   ) {
//   }
//
//   ngOnInit() {
//   }
//
//   onDialogOk() {
//     const review = {
//       review: this.review,
//       rating: this.rating,
//       customerId: localStorage.getItem('user_id'),
//       itemId: this.itemId,
//       itemType: this.itemType
//     };
//
//     if (!review.customerId) {
//       return this.dialogRef.close({
//         success: false,
//         msg: "You must be logged as a customer to add a review"
//       });
//     }
//
//     if (!(review.review && review.rating)) {
//       return this.dialogRef.close({
//         success: false,
//         msg: "Please enter a review and a rating"
//       });
//     }
//
//     this.reviewService.addReview(this.itemId, this.itemType, review)
//       .subscribe(data => {
//         this.dialogRef.close(data);
//       })
//   }
//
//   onDialogCancel() {
//     this.dialogRef.close({
//       success: false
//     });
//   }
// }
//
