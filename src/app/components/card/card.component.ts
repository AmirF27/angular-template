import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input('title') title: string;
  @Input('icon') icon: string;
  @Input('iconPlacement') iconPlacement: string;
  @Input('primary') primary: boolean = false;
  @Input('link') link: string;
  @Input('middle') middle: boolean = false;

  iconMap = {
    announcement: 'bullhorn',
    search: 'search',
    timer: 'clock-o',
    mobile: 'mobile',
    code: 'code',
    brush: 'paint-brush',
    grid: 'th',
    check: 'check'
  };

  cssClasses: {};

  ngOnInit(): void {
    this.initCssClasses();
  }

  initCssClasses(): void {
    this.cssClasses = {
      'card--primary': this.primary,
      'card--middle': this.middle
    };
  }

  getIcon(): string {
    if (this.icon in this.iconMap) {
      return this.iconMap[this.icon];
    } else {
      console.warn(`${this.icon} is not a valid icon, defaulted to 'announcement'`);
      return this.iconMap.announcement;
    }
  }
}
