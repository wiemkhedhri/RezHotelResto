import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
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
import { ListereservationsComponent } from './components/listereservations/listereservations.component';
import { AjoutimagehotelComponent } from './components/ajoutimagehotel/ajoutimagehotel.component';
import { DetaillehotelComponent } from './components/detaillehotel/detaillehotel.component';
import { AllrestaurantComponent } from './components/allrestaurant/allrestaurant.component';
import { AllreservrestoComponent } from './components/allreservresto/allreservresto.component';
import { AllhotelsComponent } from './components/allhotels/allhotels.component';
import { AllreservhotelsComponent } from './components/allreservhotels/allreservhotels.component';


const routes: Routes = [

  {path:'' , component:LoginComponent} ,
  {path:'home' , component:DashboardComponent , children:[
    {path:'',component:ListeresponsablerestoComponent } ,
    {path:'respohotel' ,component:ListeresponsablehotelComponent } ,
    {path:'ajoutrespohotel' , component:AjoutRespoHotelComponent}  ,
    {path:'ajoutresporesto' , component:AjoutresporestoComponent} ,
    {path:'ajoutresto' , component:AjoutrestaurantComponent} ,
    {path:'ajouttable/:id' , component:AjouttableComponent}  ,
    {path:'listeresto' , component:ListerestaurantComponent} ,
    {path:'profile' , component:ProfileComponent} ,

    {path:'detailleresto/:id', component:DetaillerestoComponent} ,
    {path:'detaillehotel/:id', component:DetaillehotelComponent} ,
    {path:'listehotels'  , component:ListehotelComponent} ,
    {path:'ajouthotel' , component:AjouthotelComponent} ,
    {path:'listereservations' , component:ListereservationsComponent} ,
    {path:'addimghotel/:id' , component:AjoutimagehotelComponent}  ,
    {path:'listereservationshotel'  , component:ListeresponsablehotelComponent} ,
    {path:'getallrestaurant' , component:AllrestaurantComponent} ,
    {path:'getallreservresto' , component:AllreservrestoComponent} ,
    {path:'getallhotels' , component:AllhotelsComponent} ,
    {path:'allreservhoetls' , component:AllreservhotelsComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
