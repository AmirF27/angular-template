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
}
