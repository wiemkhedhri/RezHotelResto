import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotelservicesService } from 'src/app/services/hotelservices.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listehotel',
  templateUrl: './listehotel.component.html',
  styleUrls: ['./listehotel.component.css']
})
export class ListehotelComponent implements OnInit {
allhotels : any ;
currentuser : any  ;
updatevrai:Boolean = false ;
updateform:FormGroup ;
idhotel: any ;
currentuseItem = localStorage.getItem('currentuser') ;
  constructor(private hotelservice:HotelservicesService ,private fb:FormBuilder) {

    this.currentuser = this.currentuseItem !=null? JSON.parse(this.currentuseItem) : null;
  }

  ngOnInit(): void {
    this.updateform = this.fb.group({
      libelle:['',Validators.required] ,
      adresse:['',Validators.required] ,
      ambiance:['',Validators.required] ,
      capacite:['',Validators.required] ,
      nb_etoile:['',Validators.required] ,
      tarif:['',Validators.required] ,
    })
    this.getall() ;
  }


  getall(){
    this.hotelservice.getbyrespo(this.currentuser.id).subscribe((data)=>{
      this.allhotels = data;
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
      this.hotelservice.delete(id).subscribe(() => {
        this.getall() ;

        Swal.fire(
          'Success!',
          'Supprimer avec Success!',
          'success'
        )
        this.getall() ;
      });

      this.getall() ;
    }
  });
}


patchform(r){
this.updateform.patchValue({
  libelle:r.libelle ,
  adresse:r.adresse ,
  ambiance:r.ambiance,
  capacite:r.capacite,
  nb_etoile:r.nb_etoile ,
  tarif:r.tarif ,
})
this.idhotel = r.id ;
this.updatevrai = true ;
}
update(){
this.hotelservice.modifier(this.idhotel , this.updateform.value).subscribe((data)=>{
  Swal.fire(
    'Success!',
    'Modifier avec Success!',
    'success'
  )
this.updatevrai  = false ;
this.getall() ;

})

}
}
