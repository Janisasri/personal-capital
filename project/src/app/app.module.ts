import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { StartedformComponent } from './startedform/startedform.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddinfoComponent } from './addinfo/addinfo.component';
import { InvestinfoComponent } from './investinfo/investinfo.component';
import { CarddetailsComponent } from './carddetails/carddetails.component';
import { LocationComponent } from './location/location.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { InvesterComponent } from './invester/invester.component';
import { LearnComponent } from './learn/learn.component';
import { HttpCallInterceptor } from 'src/app/interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { DashboardcontentComponent } from './dashboardcontent/dashboardcontent.component';
import { SavingplannerComponent } from './savingplanner/savingplanner.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AddinfoviewComponent } from './addinfoview/addinfoview.component';
import { CardviewComponent } from './cardview/cardview.component';
import { PlanviewComponent } from './planview/planview.component';
import { PrimarybankComponent } from './primarybank/primarybank.component';
import { ChildbankComponent } from './childbank/childbank.component';
import { ShowComponent } from './show/show.component';


@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    HomepageComponent,
    StartedformComponent,
    DashboardComponent,
    AddinfoComponent,
    InvestinfoComponent,
    CarddetailsComponent,
    LocationComponent,
    ViewdetailsComponent,
    InvesterComponent,
    LearnComponent,
    DashboardcontentComponent,
    SavingplannerComponent,
    AddinfoviewComponent,
    CardviewComponent,
    PlanviewComponent,
    PrimarybankComponent,
    ChildbankComponent,
    ShowComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    NgxSpinnerModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), 
  ],
    providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: HttpCallInterceptor,
      multi: true
    }],
    bootstrap: [AppComponent],
})
export class AppModule { }
