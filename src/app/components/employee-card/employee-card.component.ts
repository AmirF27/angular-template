import { Component, Input } from '@angular/core';

import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent extends CardComponent {
  @Input('portrait') portrait: string;
  @Input('role') role: string;
}
