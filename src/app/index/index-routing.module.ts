import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FashionComponent } from './fashion/fashion.component';
import { BlogComponent } from './blog/blog.component';
import { NotfoundComponent } from '../notfound/notfound.component';


const routes: Routes = [
  {path: '', component:IndexComponent,
  children:[
   /* {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'contact', component:ContactComponent},
    { path:'projects', component:ProjectsComponent},
    { path:'fashion', component:FashionComponent},
    { path:'blog', component:BlogComponent},*/
  ]},  
  { path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
