import {Component, OnInit} from '@angular/core';
import {ValidateService} from "../../services/validate/validate.service";
import {NewAttService} from "../../services/new-att/new-att.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {Router} from "@angular/router";
// import {image2base64}from'image-to-base64';
@Component({
  selector: 'app-new-att',
  templateUrl: './new-att.component.html',
  styleUrls: ['./new-att.component.css']
})
export class NewAttComponent implements OnInit {
  attractionName: string;
  attractionCategory: string;
  province: string;
  district: string;
  gramaNiladhariDivision: string;
  description: string;
  latitude: string;
  longitude: string;
  address: string;
  mobileNumber: string;
  email: string;
  availableTransportModes: string;
  openingHours: string;
  emergencyServices: string;
  private imageSrc: string = ''
  constructor(
    private validateService: ValidateService,
    private newAttService: NewAttService,
    private flashMessage: FlashMessagesService,
    private router: Router,

) {
  }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user: any = {
      attractionName: this.attractionName,
      attractionCategory: this.attractionCategory,
      province: this.province,
      district: this.district,
      gramaNiladhariDivision: this.gramaNiladhariDivision,
      description: this.description,
      latitude: this.latitude,
      longitude: this.longitude,
      address: this.address,
      mobileNumber: this.mobileNumber,
      email: this.email,
      availableTransportModes: this.availableTransportModes,
      openingHours: this.openingHours,
      emergencyServices: this.emergencyServices,
      imageBase64:this.imageSrc,
      approved:false

    };

    console.log(user)
    this.newAttService.addAttraction(user)
      .subscribe(data => {
        console.log(data);
        if (data.success) {

          this.flashMessage.show('Successfully Added', {
            cssClass: 'alert-success',
            timeout: 5000
          });
        } else {

          this.flashMessage.show(data.msg, {
            cssClass: 'alert-danger',
            timeout: 5000
          });

        }
      })

  }


  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);

  }
  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = reader.result;
    // console.log(this.imageSrc)
  }



}
