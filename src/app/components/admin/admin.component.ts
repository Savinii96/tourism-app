import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../../services/auth/auth.service";
import { AdminService } from "../../services/Admin/admin.service";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  attractions = [];

  constructor(
    private authService: AuthService,
    private router: Router,
    private adminService: AdminService
  ) { }

  ngOnInit() {
    if (!this.authService.isAdmin()) {
      this.router.navigate(['/login']);

    }

    this.adminService.getAttractions().subscribe(data => {
      if (data.success) {
        console.log(data.item)
        this.attractions = data.item;
      } else {

      }
    })

  }

  accept(id, email) {

    console.log(id)
    this.adminService.acceptReq(id, email).subscribe(data => {
      if (data.success) {
        console.log(data.item)

      } else {

      }
    })

  }

  reject(id, email) {
    console.log(id)
    this.adminService.rejectReq(id, email).subscribe(data => {
      if (data.success) {
        console.log(data.item)
      } else {

      }
    })

  }


}

