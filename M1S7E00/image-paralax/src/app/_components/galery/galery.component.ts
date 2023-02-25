import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements OnInit{

  @Input() images: string[] = [];
  imageUrl: string = '';


  ngOnInit(): void {
    this.imageUrl = this.images[0];
  }

  goToFirstImage() {
    this.imageUrl = this.images[0];
  }

  goToLastImage() {
    this.imageUrl = this.images[this.images.length - 1];
  }

  findImageIndex() {
    return this.images.findIndex(img => img == this.imageUrl);
  }

  goToNextImage() {
    let currentIndex = this.findImageIndex();
    if(currentIndex === this.images.length - 1) {
      this.goToFirstImage()
    }else{
      this.imageUrl = this.images[currentIndex+1];
    }
  }

  goToPreviousImage() {
    let currentIndex = this.findImageIndex();
    if(currentIndex === 0) {
      this.goToLastImage();
    }else{
      this.imageUrl = this.images[currentIndex-1];
    }
  }

  // changeImage(number: number) {
  //   let currentIndex = 0;
  //     switch(number) {
  //       case 1:
  //         currentIndex = this.images.findIndex(img => img == this.imageUrl);
  //         if(currentIndex === this.images.length - 1) {
  //           this.imageUrl = this.images[0];
  //         }else{
  //           this.imageUrl = this.images[currentIndex+1];
  //         }
  //       break;

  //       case 2:
  //         currentIndex = this.images.findIndex(img => img == this.imageUrl);
  //         if(currentIndex === 0) {
  //           this.imageUrl = this.images[this.images.length - 1];
  //         }else{
  //           this.imageUrl = this.images[currentIndex-1];
  //         }
  //       break;

  //       case 3:
  //         this.imageUrl = this.images[0];
  //       break;

  //       case 4:
  //         this.imageUrl = this.images[this.images.length - 1];
  //       break;
  //     }
  // }


}
