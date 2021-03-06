import {Component, OnInit} from '@angular/core';
import {ValidateService} from "../../services/validate/validate.service";
import {NewAttService} from "../../services/new-att/new-att.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {Router} from "@angular/router";
import { AuthService } from 'src/app/services/auth/auth.service';
// import {image2base64}from'image-to-base64';
@Component({
  selector: 'app-new-att',
  templateUrl: './new-att.component.html',
  styleUrls: ['./new-att.component.css']
})
export class NewAttComponent implements OnInit {
  urls = [];
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
  userId:string
  availableTransportModes: string;
  openingHours: string;
  emergencyServices: string;
  private imageSrc: string = ''
  constructor(
    private validateService: ValidateService,
    private newAttService: NewAttService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private authService:AuthService

) {
  }

  ngOnInit() {

    this.authService.getProfile()
    .subscribe(data => {
      console.log(data)
        this.email = data.user.email;
        this.userId = data.user._id;

      },
      err => {
        console.log(err);
      });
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
      imageBase64:this.urls,
      approved:false,
      userId:this.userId

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

          this.router.navigate(['/attractions/all']);
        } else {

          this.flashMessage.show(data.msg, {
            cssClass: 'alert-danger',
            timeout: 5000
          });

        }
      })


  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = (event:any) => {
                  console.log(event.target.result);
                   this.urls.push(event.target.result); 
                }

                reader.readAsDataURL(event.target.files[i]);
        }
    }
    console.log(this.urls)
  }

  // handleInputChange(e) {
  //   var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
  //   var pattern = /image-*/;
  //   var reader = new FileReader();
  //   if (!file.type.match(pattern)) {
  //     alert('invalid format');
  //     return;
  //   }
  //   reader.onload = this._handleReaderLoaded.bind(this);
  //   reader.readAsDataURL(file);

  // }
  // _handleReaderLoaded(e) {
  //   let reader = e.target;
  //   this.imageSrc = reader.result;
  //   // console.log(this.imageSrc)
  // }



}
