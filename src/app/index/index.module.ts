import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { FashionComponent } from './fashion/fashion.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { IndexComponent } from './index.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { DetailsComponent } from './home/details/details.component';
import { PortraitsComponent } from './portraits/portraits.component';

@NgModule({
  declarations: [
    AboutComponent,
    BlogComponent,
    ContactComponent,
    FashionComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ProjectsComponent,
    IndexComponent,
    NotfoundComponent,
    DetailsComponent,
    PortraitsComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule
  ]
})
export class IndexModule { }
