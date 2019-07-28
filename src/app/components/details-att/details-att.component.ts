import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { NewAttService } from "../../services/new-att/new-att.service";
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-details-att',
  templateUrl: './details-att.component.html',
  styleUrls: ['./details-att.component.css']
})
export class DetailsAttComponent implements OnInit {
  id = ''
  item = []
  currentRate = 0;
  userId = ''
  rated = false;
  Review = ''
  reviewed = false
  reviews = []
  constructor(private router: Router, private route: ActivatedRoute, private newAttService: NewAttService, private authService: AuthService


  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id
    console.log(this.id)
    this.newAttService.getAttractionById(this.id).subscribe(data => {
      if (data.success) {
        console.log(data.item)
        this.item = data.item;
      } else {

      }
    })

    this.authService.getProfile()
      .subscribe(data => {
        console.log(data)
        this.userId = data.user._id;
      },
        err => {
          console.log(err);
        });

    this.newAttService.getRatingById(this.id).subscribe(data => {
      if (data.success) {
        console.log(data.item)
        if (data.item != null) {

          var size = data.item.length
          var ratingTotal = 0
          data.item.forEach(element => {
            ratingTotal += element.rating
          });
          this.currentRate = ratingTotal / size
        }

      } else {

      }
    })


    this.newAttService.getReviewById(this.id).subscribe(data => {
      if (data.success) {
        console.log(data.item)
        if (data.item != null) {
          this.reviews = data.item
        }
      } else {

      }
    })
  }

  review(event) {
    console.log(event)
    this.Review = event
  }

  postReview() {
    var obj = {
      description: this.Review,
      userId: this.userId,
      attractionId: this.id
    }
    console.log(event)

    this.newAttService.addReview(obj).subscribe(data => {
      if (data.success) {
        console.log(data)
        this.reviewed = true
        this.newAttService.getReviewById(this.id).subscribe(data => {
          if (data.success) {
            console.log(data.item)
            if (data.item != null) {
              this.reviews = data.item
            }
          } else {
    
          }
        })
      } else {

      }
    })
  }
  rate() {
    var obj = {
      rating: this.currentRate,
      userId: this.userId,
      attractionId: this.id
    }
    console.log(this.currentRate)

    this.newAttService.addRating(obj).subscribe(data => {
      if (data.success) {
        console.log(data)
        this.rated = true
        this.newAttService.getRatingById(this.id).subscribe(data => {
          if (data.success) {
            console.log(data.item)
            if (data.item != null) {

              var size = data.item.length
              var ratingTotal = 0
              data.item.forEach(element => {
                ratingTotal += element.rating
              });
              this.currentRate = ratingTotal / size
            }

          } else {

          }
        })

      } else {

      }
    })
  }

}
