import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavLinkComponent } from './components/nav-link/nav-link.component';
import { LogoComponent } from './components/logo/logo.component';
import { HeroComponent } from './components/hero/hero.component';
import { ContactBarComponent } from './components/contact-bar/contact-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavLinkComponent,
    LogoComponent,
    HeroComponent,
    ContactBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
