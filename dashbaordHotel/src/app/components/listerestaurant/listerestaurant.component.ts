import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable  , of} from 'rxjs';
import { RestaurantserviceService } from 'src/app/services/restaurantservice.service';
import { TableserviceService } from 'src/app/services/tableservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listerestaurant',
  templateUrl: './listerestaurant.component.html',
  styleUrls: ['./listerestaurant.component.css']
})
export class ListerestaurantComponent implements OnInit {
listeresto:any ;
updateform:FormGroup ;
updatevrai:Boolean = false ;
currentuser : any  ;
restaurant:any ;

currentuseItem = localStorage.getItem('currentuser') ;
  constructor(private restoservoce:RestaurantserviceService , private tableservice:TableserviceService , private fb:FormBuilder) {
    this.currentuser = this.currentuseItem !=null? JSON.parse(this.currentuseItem) : null;
   }

  ngOnInit(): void {
    this.getall() ;
    this.updateform = this.fb.group({
      libelle :['']  ,
      adresse:[''] ,
      typeambiance:[''] ,
      heureouvert:[''] ,
      heureclosed:[''],
      capacite:[''],
      typecuisine:['']
    })
  }
getall(){
  this.restoservoce.getbyresponsable(this.currentuser.id).subscribe((data)=>{
    this.listeresto = data ;

       })
}

update(){
this.restoservoce.update(this.restaurant , this.updateform.value).subscribe((data)=>{
  Swal.fire(
    'Success!',
    'Mise a jour avec Success!',
    'success'
  )
  this.updatevrai   = false ;
  this.getall() ;
})
}

supprimer(id){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  }).then((result) => {
    if (result.isConfirmed) {
      this.restoservoce.delete(id).subscribe(() => {

        this.getall() ;

        Swal.fire(
          'Success!',
          'Supprimer avec Success!',
          'success'
        )
      });

      this.getall() ;
    }
  });

  this.getall() ;
}
patchform(resto){
  this.updatevrai = true ;
  this.restaurant = resto.id ;
    this.updateform.patchValue({
      libelle : resto.libelle  ,
      adresse: resto.adresse,
      typeambiance: resto.typeambiance ,
      heureouvert:resto.heureouvert ,
      heureclosed: resto.heureclosed,
      capacite: resto.capacite,
      typecuisine: resto.typecuisine
    })
}



}
