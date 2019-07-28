import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() {
  }

  validateRegister(user) {
    if ((user.name == undefined) || (user.username == undefined) || (user.password == undefined) || (user.confPass == undefined) || (user.email == undefined)) {
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validateUsername(username) {
    const re = /^[-\w\.\$@\*\!]{1,30}$/;
    return re.test(String(username));
  }

  validatePassword(password, confPass) {
    if (password !== confPass) {
      return false;
    } else {
      return true;
    }
  }

  validatePhone(number) {
    const re = /^([0-9]){9}$/;
    return re.test(String(number));
  }
}
