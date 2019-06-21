import {Component, OnInit} from '@angular/core';
import {ValidateService} from "../../services/validate/validate.service";
import {AuthService} from "../../services/auth/auth.service"
import {FlashMessagesService} from "angular2-flash-messages";
import {User} from "../../object-classes/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-att',
  templateUrl: './new-att.component.html',
  styleUrls: ['./new-att.component.css']
})
export class NewAttComponent implements OnInit {
  hidePass: Boolean = true;
  hideConfPass: Boolean = true;


  constructor() {
  }

  ngOnInit() {
  }

}
