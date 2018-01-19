import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavLinkComponent } from './components/nav-link/nav-link.component';
import { LogoComponent } from './components/logo/logo.component';
import { HeroComponent } from './components/hero/hero.component';
import { ContactBarComponent } from './components/contact-bar/contact-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './components/home/home.component';
import { StatCardComponent } from './components/stat-card/stat-card.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { ProductsComponent } from './components/products/products.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavLinkComponent,
    LogoComponent,
    HeroComponent,
    ContactBarComponent,
    FooterComponent,
    CardComponent,
    HomeComponent,
    StatCardComponent,
    SubscribeComponent,
    ProductsComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
