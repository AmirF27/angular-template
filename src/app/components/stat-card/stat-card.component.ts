import { Component, Input } from '@angular/core';

import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.scss']
})
export class StatCardComponent extends CardComponent {
  @Input('num') num: number;
}
