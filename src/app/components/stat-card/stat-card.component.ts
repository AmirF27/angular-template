import { Component, OnInit, Input } from '@angular/core';

import { CardComponent } from '../card/card.component';

const TARGET = 100;
const INTERVAL = 40;

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.scss']
})
export class StatCardComponent extends CardComponent implements OnInit {
  @Input('num') num: number;

  currentNum: number = 0;
  counter: number = 0;

  ngOnInit(): void {
    this.incrementCounter();
  }

  incrementCounter(): void {
    setTimeout(() => {
      this.currentNum += this.num / TARGET;
      this.counter++;

      if (this.counter < TARGET) {
        this.incrementCounter();
      }
    }, INTERVAL);
  }
}
