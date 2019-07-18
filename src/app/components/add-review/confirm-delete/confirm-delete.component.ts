// import {Component, OnInit, Inject} from '@angular/core';
// import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
//
// @Component({
//   selector: 'app-confirm-delete',
//   templateUrl: './confirm-delete.component.html',
//   styleUrls: ['./confirm-delete.component.css']
// })
// export class ConfirmDeleteDialog implements OnInit {
//
//   constructor(
//     private dialogRef: MatDialogRef<ConfirmDeleteDialog>,
//     @Inject(MAT_DIALOG_DATA) private data: any,
//     private itemService: ItemService
//   ) {
//   }
//
//   ngOnInit() {
//   }
//
//   onDialogConfirm() {
//     this.itemService.deleteItem(this.data.itemId)
//       .subscribe(data => {
//         this.dialogRef.close(data);
//       });
//   }
//
//   onDialogCancel() {
//     this.dialogRef.close({
//       success: false
//     })
//   }
//
// }
