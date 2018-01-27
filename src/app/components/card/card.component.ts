import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input('title') title: string;
  @Input('icon') icon: string;
  @Input('iconType') iconType: string = 'default';
  @Input('iconPlacement') iconPlacement: string;
  @Input('primary') primary: boolean = false;
  @Input('link') link: string;
  @Input('middle') middle: boolean = false;

  iconMap = {
    default: {
      announcement: 'bullhorn',
      search: 'search',
      clock: 'clock-o',
      mobile: 'mobile',
      code: 'code',
      brush: 'paint-brush',
      grid: 'th',
      check: 'check',
      smile: 'smile-o'
    },
    line: {
      cog: 'settings',
      smile: 'emotsmile',
      briefcase: 'briefcase',
      clock: 'clock'
    }
  };

  iconPrefixes = {
    default: 'fa fa-',
    line: 'icon-'
  }

  cssClasses: {};

  ngOnInit(): void {
    this.initCssClasses();
  }

  initCssClasses(): void {
    this.cssClasses = {
      'card--default': !this.primary,
      'card--primary': this.primary,
      'card--middle': this.middle
    };
  }

  getIcon(): string {
    if (this.validIcon(this.icon)) {
      const prefix = this.iconPrefixes[this.iconType];
      const icon = this.iconMap[this.iconType][this.icon];

      return `${prefix}${icon}`;
    } else {
      console.warn(`'${this.icon}' is not a valid icon, defaulted to 'announcement'`);
      return `${this.iconPrefixes.default}${this.iconMap.default.announcement}`;
    }
  }

  validIcon(icon: string): boolean {
    return icon in this.iconMap.default ||
      icon in this.iconMap.line;
  }
}
