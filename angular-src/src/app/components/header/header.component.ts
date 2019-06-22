import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  onLogout() {
    this.authService.logout();
    this.flashMessage.show('Logged out successfully', {
      cssClass: 'alert-success',
      timeout: 5000
    });

    this.router.navigate(['/login']);
    return false;
  }

}
