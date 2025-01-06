import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestaurantserviceService } from 'src/app/services/restaurantservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajoutrestaurant',
  templateUrl: './ajoutrestaurant.component.html',
  styleUrls: ['./ajoutrestaurant.component.css']
})
export class AjoutrestaurantComponent implements OnInit {
  Ajoutform:FormGroup ;
  fileToUpload: Array<File> = [];
  currentuser : any  ;
currentuseItem = localStorage.getItem('currentuser') ;
restaurant:any  ;
idresto : any ;
  constructor(private fb:FormBuilder ,private restoservice:RestaurantserviceService , private router:Router ) {
    this.currentuser = this.currentuseItem !=null? JSON.parse(this.currentuseItem) : null;
  }

  ngOnInit(): void {
   this.Ajoutform = this.fb.group({
    libelle:['',Validators.required] ,
    adresse:['',Validators.required] ,
    typeambiance:['',Validators.required] ,
    heureouvert:['',Validators.required] ,
    heureclosed:['',Validators.required] ,
    capacite:['',Validators.required] ,
    typecuisine:['',Validators.required] ,
    photomenu:['',Validators.required]
   })
  }

  ajout(){
    let formData = new FormData();
    formData.append('libelle' , this.Ajoutform.value.libelle)
    formData.append('adresse' , this.Ajoutform.value.adresse)
    formData.append('typeambiance' , this.Ajoutform.value.typeambiance)
    formData.append('heureouvert' , this.Ajoutform.value.heureouvert)
    formData.append('heureclosed' , this.Ajoutform.value.heureclosed)
    formData.append('capacite' , this.Ajoutform.value.capacite)
    formData.append('typecuisine' , this.Ajoutform.value.typecuisine)
    formData.append('file', this.fileToUpload[0]);
    if (this.Ajoutform.invalid) {

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You have to enter the inputs!',
      })
      return;
    }else {
     this.restoservice.ajouter(formData , this.currentuser.id).subscribe((data)=>{
      this.restaurant = data ;
      this.idresto =this.restaurant.id ;
      console.log("hedhy id el resto " , this.idresto)
      Swal.fire(
        'Success!',
        'Ajout avec success!',
        'success'
      )
       this.router.navigateByUrl(`/home/ajouttable/${this.idresto}`)
     }) }

  }

  handleFileInput(files: any) {

    this.fileToUpload = <Array<File>>files.target.files;
      // this.imgchecked = true ;
    }
}
