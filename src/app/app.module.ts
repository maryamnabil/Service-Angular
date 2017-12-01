import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import  {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DataCardsService } from './photos/data-cards.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PhotosComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'Home' , component:HomeComponent },
      {path:'Photos' , component:PhotosComponent },
      {path:'AboutUs' , component:AboutUsComponent },
    
      ])
  ],
  providers: [ DataCardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
