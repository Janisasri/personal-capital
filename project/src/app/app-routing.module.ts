import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoComponent } from 'angular-bootstrap-md';
import { AddinfoComponent } from './addinfo/addinfo.component';
import { CarddetailsComponent } from './carddetails/carddetails.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardcontentComponent } from './dashboardcontent/dashboardcontent.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InvesterComponent } from './invester/invester.component';
import { InvestinfoComponent } from './investinfo/investinfo.component';
import { LearnComponent } from './learn/learn.component';
import { SavingplannerComponent } from './savingplanner/savingplanner.component';
import { StartedformComponent } from './startedform/startedform.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';



const routes: Routes = [

  { path:'',component:HomepageComponent},
  { path:'home',component:HomepageComponent},
  { path:'start', component:StartedformComponent},
  { path:'login',component:HomepageComponent},
  { path:'dashboard',component:DashboardComponent},
  { path:'add',component:AddinfoComponent},
  { path:'invest',component:InvestinfoComponent},
  { path:'card',component:CarddetailsComponent},
  { path:'GoBack',component:DashboardComponent},
  { path:'viewdetails',component:ViewdetailsComponent},
  { path:'investgo',component:InvesterComponent},
  { path:'learn',component:LearnComponent},
  { path:'Investinfo',component:InvestinfoComponent},
  { path:'CardInfo',component:CarddetailsComponent},
  { path:'view',component:ViewdetailsComponent},
  { path: 'login1',component:HomepageComponent},
  { path: 'investershow',component:InvesterComponent},
  { path:'saving',component:SavingplannerComponent},
  { path:'information',component:DashboardcontentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
