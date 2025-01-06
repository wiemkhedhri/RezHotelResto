import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotelservicesService } from 'src/app/services/hotelservices.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajouthotel',
  templateUrl: './ajouthotel.component.html',
  styleUrls: ['./ajouthotel.component.css']
})
export class AjouthotelComponent implements OnInit {
  Ajoutform:FormGroup ;
  hotel:any ;
  currentuser : any  ;
currentuseItem = localStorage.getItem('currentuser') ;

  constructor(private fb:FormBuilder , private hotelservice:HotelservicesService , private router:Router) {
    this.currentuser = this.currentuseItem !=null? JSON.parse(this.currentuseItem) : null;
  }

  ngOnInit(): void {
    this.Ajoutform= this.fb.group({
      libelle:['',Validators.required] ,
      adresse:['',Validators.required] ,
      ambiance:['',Validators.required] ,
      capacite:['',Validators.required] ,
      nb_etoile:['',Validators.required] ,
      tarif:['',Validators.required] ,
    })
  }

  ajout(){
    if (this.Ajoutform.invalid) {

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You have to enter the inputs!',
      })
      return;


  } else {
    this.hotelservice.ajouter(this.Ajoutform.value , this.currentuser.id).subscribe((data)=>{
    this.hotel = data ;
    Swal.fire(
      'Success!',
      'Ajout avec success!',
      'success'
    )
    this.router.navigateByUrl(`/home/addimghotel/${this.hotel.id}`)
    })
  }
}
}
