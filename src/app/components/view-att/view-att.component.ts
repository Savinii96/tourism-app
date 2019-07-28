import { Component, OnInit } from '@angular/core';
import { AdminService } from "../../services/Admin/admin.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-att',
  templateUrl: './view-att.component.html',
  styleUrls: ['./view-att.component.css']
})
export class ViewAttComponent implements OnInit {

  attractions = null
  presentations = ["lol", "blabl"]
  constructor(private adminService: AdminService,
    private router: Router) {

  }

  ngOnInit() {
    this.adminService.getAttractions().subscribe(data => {
      if (data.success) {
        console.log(data.item)
        var array = []
        data.item.forEach(element => {
          if (element.approved) {
            array.push(element)
          }
        });
        this.attractions = array
      } else {

      }
    })
  }

  view(id) {
    console.log(id)
    this.router.navigate(['/attractions/'+id]);


  }

}

