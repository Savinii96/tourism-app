import {Component, OnInit} from '@angular/core';
import {ValidateService} from "../../services/validate/validate.service";
import {AuthService} from "../../services/auth/auth.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {User} from "../../object-classes/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hidePass: Boolean = true;
  hideConfPass: Boolean = true;

  name: String;
  username: String;
  email: String;
  password: String;
  confPass: String;
  // isAdmin: boolean;
  telephoneNo: String;
  mobileNo: String;
  address: String;

  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user: User = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password,
      confPass: this.confPass,
      telephoneNo: this.telephoneNo,
      mobileNo: this.mobileNo,
      address: this.address
    };

    if (!this.validateService.validateRegister(user)) {
      this.flashMessage.show("Please fill the required fields", {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    if (!this.validateService.validateUsername(user.username)) {
      this.flashMessage.show("Please enter a valid username", {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessage.show("Please enter a valid email", {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    if (!this.validateService.validatePassword(user.password, user.confPass)) {
      this.flashMessage.show("Entered password doesn't match with the confirmed password", {
        cssClass: 'alert-danger',
        timeout: 3000
      });
      return false;
    }

    if (!this.validateService.validatePhone(user.telephoneNo)) {
      this.flashMessage.show("Please enter a valid telephone number", {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    if (!this.validateService.validatePhone(user.mobileNo)) {
      this.flashMessage.show("Please enter a valid mobile number", {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        this.flashMessage.show("User successfully registered", {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show("User registration failed", {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/register']);
      }
    })
  }
}
