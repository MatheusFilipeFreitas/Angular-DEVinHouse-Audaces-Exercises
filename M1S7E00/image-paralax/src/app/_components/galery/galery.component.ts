import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements OnInit{

  @Input() public images: string[] = [];
  imageUrl: string = '';


  ngOnInit(): void {
    this.addUrlToImages();
    this.imageUrl = this.images[0];
  }

  addUrlToImages() {
    this.images.push(`assets/images/photo1.png`);
    this.images.push(`assets/images/photo2.jpg`);
    this.images.push(`assets/images/photo3.jpg`);
  }

  goToFirstImage() {
    this.imageUrl = this.images[0];
  }

  goToLastImage() {
    this.imageUrl = this.images[this.images.length - 1];
  }

  goToNextImage() {
    let currentIndex = this.images.findIndex(img => img == this.imageUrl);
    if(currentIndex === this.images.length - 1) {
      this.goToFirstImage()
    }else{
      this.imageUrl = this.images[currentIndex+1];
    }
  }

  goToPreviousImage() {
    let currentIndex = this.images.findIndex(img => img == this.imageUrl);
    if(currentIndex === 0) {
      this.goToLastImage();
    }else{
      this.imageUrl = this.images[currentIndex-1];
    }
  }


}
