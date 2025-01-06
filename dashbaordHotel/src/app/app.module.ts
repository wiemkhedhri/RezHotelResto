import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ListeresponsablerestoComponent } from './components/listeresponsableresto/listeresponsableresto.component';
import { ListeresponsablehotelComponent } from './components/listeresponsablehotel/listeresponsablehotel.component';
import { AjoutRespoHotelComponent } from './components/ajout-respo-hotel/ajout-respo-hotel.component';
import { AjoutresporestoComponent } from './components/ajoutresporesto/ajoutresporesto.component';
import { AjoutrestaurantComponent } from './components/ajoutrestaurant/ajoutrestaurant.component';
import { AjouttableComponent } from './components/ajouttable/ajouttable.component';
import { ListerestaurantComponent } from './components/listerestaurant/listerestaurant.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ListehotelComponent } from './components/listehotel/listehotel.component';
import { DetaillerestoComponent } from './components/detailleresto/detailleresto.component';
import { AjouthotelComponent } from './components/ajouthotel/ajouthotel.component';
import { AjoutimagehotelComponent } from './components/ajoutimagehotel/ajoutimagehotel.component';
import { DetaillehotelComponent } from './components/detaillehotel/detaillehotel.component';
import { ListereservationsComponent } from './components/listereservations/listereservations.component';
import { ListereservationhotelComponent } from './components/listereservationhotel/listereservationhotel.component';
import { AllrestaurantComponent } from './components/allrestaurant/allrestaurant.component';
import { AllreservrestoComponent } from './components/allreservresto/allreservresto.component';
import { AllhotelsComponent } from './components/allhotels/allhotels.component';
import { AllreservhotelsComponent } from './components/allreservhotels/allreservhotels.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ListeresponsablerestoComponent,
    ListeresponsablehotelComponent,
    AjoutRespoHotelComponent,
    AjoutresporestoComponent,
    AjoutrestaurantComponent,
    AjouttableComponent,
    ListerestaurantComponent,
    ProfileComponent,
    ListehotelComponent,
DetaillerestoComponent,
AjouthotelComponent,
AjoutimagehotelComponent,
DetaillehotelComponent,
ListereservationsComponent,
ListereservationhotelComponent,
AllrestaurantComponent,
AllreservrestoComponent,
AllhotelsComponent,
AllreservhotelsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule ,
    ReactiveFormsModule ,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
