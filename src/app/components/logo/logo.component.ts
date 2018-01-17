import { Component } from '@angular/core';

import { NavLinkComponent } from '../nav-link/nav-link.component';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent extends NavLinkComponent {
}
