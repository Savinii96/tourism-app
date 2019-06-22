import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  user: any;
  dataLoaded: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.authService.getProfile()
      .subscribe(data => {
          this.user = data.user;
        },
        err => {
          console.log(err);
        },
        () => {
          this.dataLoaded = true;
        });
  }
}
