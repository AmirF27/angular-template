import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

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
import { LatestWorksComponent } from './components/latest-works/latest-works.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FeaturesComponent } from './components/features/features.component';
import { FactsComponent } from './components/facts/facts.component';
import { AboutComponent } from './components/about/about.component';
import { CompanyHistoryComponent } from './components/company-history/company-history.component';
import { TeamComponent } from './components/team/team.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';

import { IntPipe } from './pipes/int.pipe';

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
    CarouselComponent,
    LatestWorksComponent,
    GalleryComponent,
    FeaturesComponent,
    FactsComponent,
    AboutComponent,
    CompanyHistoryComponent,
    TeamComponent,
    EmployeeCardComponent,
    PortfolioComponent,
    ServicesComponent,
    ContactComponent,
    IntPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
