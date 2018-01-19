import { Component } from '@angular/core';

@Component({
  selector: 'app-latest-works',
  templateUrl: './latest-works.component.html',
  styleUrls: ['./latest-works.component.scss']
})
export class LatestWorksComponent {
  images: string[] = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg',
    'img6.jpg',
  ];
}
