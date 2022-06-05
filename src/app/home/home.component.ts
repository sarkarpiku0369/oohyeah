import { Component, OnInit } from '@angular/core';
import {OwlCarousel} from 'ngx-owl-carousel';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = [  
    { 
      img: "assets/images/offer.png",
      text: "Sell Items",
      content:"Sell unlimited store items in our commission free marketplace",
    },  
    { 
      img: "assets/images/offer2.png",
      text: "Stream/Audio",
      content:"Stream and /or sell high-quality audio",
    },  
    { 
      img: "assets/images/offer3.png",
      text: "Pre-Order",
      content:"Offer pre-order album sales or crowdfund their next project without making fans making fans jump through hoops or levels", 
    },  
    { 
      img: "assets/images/offer4.jpg",
      text: "Sell Items",
      content:"Sell unlimited store items in our commission free marketplace",
     }, 
     { 
      img: "assets/images/offer5.jpg",
      text: "Sell Items",
      content:"Sell unlimited store items in our commission free marketplace",
     },  
  ]; 

  artistImages = [  
    { img: "assets/images/artist.png" },  
    { img: "assets/images/artist2.png" },  
    { img: "assets/images/artist3.png" },  
    { img: "assets/images/artist4.png" },
    { img: "assets/images/artist5.png" },
    { img: "assets/images/artist.png" },
   
  ]; 
  slideConfig = {  
    // "slidesToShow": 3,  
    "infinite": true,
    "slidesToScroll": 3,  
    "dots": true,  
    slidesToShow: 2.93,
    nextArrow: '<button class="offer-btn offer-next"><i class="fas fa-chevron-right"></i></button>',
    prevArrow: '<button class="offer-btn offer-prev"><i class="fas fa-chevron-left"></i></button>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ] 
  }; 
  slideConfigArtist = {  
    "slidesToShow": 5,  
    "infinite": true,
    "slidesToScroll": 5,  
    "dots": true,  
    centerMode: true,
    nextArrow: '<button class="artist-btn artist-next"><i class="fas fa-chevron-right"></i></button>',
    prevArrow: '<button class="artist-btn artist-prev"><i class="fas fa-chevron-left"></i></button>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
          autoplay: true
        }
      }
    ]
  }; 


  
  constructor() {}
  
  ngOnInit(): void {
  }

}
