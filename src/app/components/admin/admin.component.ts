import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from "../../services/auth/auth.service";
import {AdminService} from "../../services/Admin/admin.service";

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}




@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  countries = [];

  constructor(
    private authService: AuthService,
    private router: Router,
    private adminService: AdminService
  ) { }

  ngOnInit() {
    if(!this.authService.isAdmin()){
      this.router.navigate(['/login']);

    }

    this.adminService.getAttractions().subscribe(data => {
      if (data.success) {
        console.log(data.item)
        this.countries=data.item;
      } else {

      }
    })

  }

  accept(id){

    console.log(id)
    // this.adminService.getAttractions().subscribe(data => {
    //   if (data.success) {
    //     console.log(data.item)
    //     this.countries=data.item;
    //   } else {
    //
    //   }
    // })

  }

  reject(id){
    console.log(id)

    // this.adminService.getAttractions().subscribe(data => {
    //   if (data.success) {
    //     console.log(data.item)
    //     this.countries=data.item;
    //   } else {
    //
    //   }
    // })

  }


}

