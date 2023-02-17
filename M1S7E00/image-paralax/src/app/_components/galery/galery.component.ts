import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements OnInit{

  images: string[] = [];
  imageUrl: string = '';

  ngOnInit(): void {
    this.addUrlToImages();
    this.imageUrl = this.images[0];
  }

  addUrlToImages() {
    this.images.push(`https://images7.alphacoders.com/129/1292566.png`);
    this.images.push(`https://www.pixel4k.com/wp-content/uploads/2020/08/netflix-cyberpunk-edgerunners-2022_1596931673.jpg`);
    this.images.push(`https://i.pinimg.com/originals/65/98/c5/6598c52a98f39ac51b60a4f47fed457f.jpg`);
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
