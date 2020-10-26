import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './index/home/home.component';
import { AboutComponent } from './index/about/about.component';
import { ContactComponent } from './index/contact/contact.component';
import { FashionComponent } from './index/fashion/fashion.component';
import { BlogComponent } from './index/blog/blog.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { IndexComponent } from './index/index.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddhomeComponent } from './dashboard/addhome/addhome.component';
import { DetailsComponent } from './details/details.component';
import { EditformComponent } from './dashboard/editform/editform.component';
import { UpdateformComponent } from './dashboard/updateform/updateform.component';
import { PortraitsComponent } from './index/portraits/portraits.component';



const routes: Routes = [
  {path: '', component:IndexComponent,
  children:[
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'contact', component:ContactComponent},
    {path:'portraits', component:PortraitsComponent},
    { path:'fashion', component:FashionComponent},
    { path:'blog', component:BlogComponent},
  ]},
  {path: 'admin', component:DashboardComponent,
  children:[
    {path:'', redirectTo:'addhome', pathMatch:'full'},
    {path:'addhome', component:AddhomeComponent},
    {path:'editform', component:EditformComponent},
    {path:'updateform/:id', component:UpdateformComponent},
  ]},
  { path:'home/:id', component:DetailsComponent},
  { path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
