import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { OwlModule } from 'ngx-owl-carousel';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ArtistsignupComponent } from './artistsignup/artistsignup.component';
import { EstimationComponent } from './estimation/estimation.component';
import { EstimateResultComponent } from './estimate-result/estimate-result.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent,
    LoginComponent,
    RegisterComponent,
    ArtistsignupComponent,
    EstimationComponent,
    EstimateResultComponent
  ],
  imports: [
    
    BrowserModule,
    SlickCarouselModule,
    AppRoutingModule,
    OwlModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
