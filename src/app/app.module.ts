import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './index/about/about.component';
import { BlogComponent } from './index/blog/blog.component';
import { ContactComponent } from './index/contact/contact.component';
import { FashionComponent } from './index/fashion/fashion.component';
import { PortraitsComponent } from './index/portraits/portraits.component';
import { FooterComponent } from './index/footer/footer.component';
import { HomeComponent } from './index/home/home.component';
import { HeaderComponent } from './index/header/header.component';
import { IndexComponent } from './index/index.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddhomeComponent } from './dashboard/addhome/addhome.component';
import { DetailsComponent } from './details/details.component';
import { EditformComponent } from './dashboard/editform/editform.component';
import { UpdateformComponent } from './dashboard/updateform/updateform.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    FashionComponent,
    PortraitsComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    IndexComponent,
    NotfoundComponent,
    DashboardComponent,
    AddhomeComponent,
    DetailsComponent,
    EditformComponent,
    UpdateformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({
      //set defaults here
      radius: 100,
      percent:100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })



    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
