import { Component, OnDestroy } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  routerSub: Subscription;
  currentRoute: string;
  heroes = {
    '/': {
      title: 'Upgrade Your Business!',
      info: 'Pharetra convallis posuere morbi leo urna molestie at.',
      button: {
        text: 'Get In Touch',
        link: '/contact'
      }
    },
    '/about': {
      title: 'About Us',
      info: 'Pharetra convallis posuere morbi leo urna molestie at.',
      center: true
    },
    '/services': {
      title: 'Our Services',
      info: 'Pharetra convallis posuere morbi leo urna molestie at.',
      center: true
    },
    '/portfolio': {
      title: 'Our Portfolio',
      info: 'Pharetra convallis posuere morbi leo urna molestie at.',
      center: true
    },
    '/contact': {
      title: 'Get In Touch',
      info: 'Pharetra convallis posuere morbi leo urna molestie at.',
      center: true
    }
  };

  constructor(
    private router: Router
  ) {
    this.routerSub = router.events.subscribe(this.handleRouterEvent.bind(this));
  }

  ngOnDestroy() {
    this.routerSub.unsubscribe();
  }

  handleRouterEvent(event: Event): void {
    if (event instanceof NavigationEnd) {
      this.currentRoute = event.url;
    }
  }
}
