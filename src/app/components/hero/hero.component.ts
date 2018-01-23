import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Input('title') title: string;
  @Input('button') button: {};
  @Input('center') center: boolean = false;
}
