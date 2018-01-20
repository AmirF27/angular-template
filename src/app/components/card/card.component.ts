import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input('title') title: string;
  @Input('icon') icon: string;
  @Input('iconPlacement') iconPlacement: string;
  @Input('primary') primary: boolean = false;
  @Input('link') link: string;

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

  getIcon(): string {
    if (this.icon in this.iconMap) {
      return this.iconMap[this.icon];
    } else {
      console.warn(`${this.icon} is not a valid icon, defaulted to 'announcement'`);
      return this.iconMap.announcement;
    }
  }
}
