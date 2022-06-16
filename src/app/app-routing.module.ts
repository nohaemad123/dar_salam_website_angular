import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CareerDetailsComponent } from './pages/career-details/career-details.component';
import { CareersComponent } from './pages/careers/careers.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiceDetailsComponent } from './pages/service-details/service-details.component';
import { ServicesComponent } from './pages/services/services.component';
import { TeamDetailsComponent } from './pages/team-details/team-details.component';
import { TeamComponent } from './pages/team/team.component';
import { WorkDetailsComponent } from './pages/work-details/work-details.component';
import { WorksComponent } from './pages/works/works.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'services',component:ServicesComponent},
  {path:'services/:id',component:ServiceDetailsComponent},
  {path:'works',component:WorksComponent},
  {path:'works/:id',component:WorkDetailsComponent},
  {path:'team',component:TeamComponent},
  {path:'team/:id',component:TeamDetailsComponent},
  {path:'careers',component:CareersComponent},
  {path:'careers/:id',component:CareerDetailsComponent},
  {path:'contact-us',component:ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
