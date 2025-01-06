import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ChambreserviceService } from 'src/app/services/chambreservice.service';
import { ImagehotelservideService } from 'src/app/services/imagehotelservide.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detaillehotel',
  templateUrl: './detaillehotel.component.html',
  styleUrls: ['./detaillehotel.component.css']
})
export class DetaillehotelComponent implements OnInit {
  id = this.route.snapshot.params['id'] ;
  allimages:any  ;
  ajoutimageform:FormGroup  ;
  fileToUpload: Array<File> = [];
  hiddenaddimage:Boolean = false ;
  allchambre:any ;
  hiddentestadchambre:Boolean = false ;
  addchambreform:FormGroup ;
  hiddentestupdatechambre:Boolean = false ;
  updatechambreform : FormGroup ;
  idchambre: any ;
  constructor(private route:ActivatedRoute , private imagehotelsevice:ImagehotelservideService , private fb:FormBuilder , private chambreservice:ChambreserviceService) { }
  ngOnInit(): void {
    this.ajoutimageform = this.fb.group({
      image:['' , Validators.required] ,
      description:['' , Validators.required]
    })
    this.getbyid() ;
    this.getbyhotel() ;


    this.addchambreform = this.fb.group({
      typelogement:['' ,Validators.required] ,
      nblit:['' , Validators.required] ,
      tarif:['' , Validators.required]
    })

    this.updatechambreform = this.fb.group({
      typelogement:['' ,Validators.required] ,
      nblit:['' , Validators.required] ,
      tarif:['' , Validators.required]
    })
  }


  getbyid(){
this.imagehotelsevice.getbyhotel(this.id).subscribe((data)=>{
  this.allimages = data ;

})
  }



  supprimerchambre(id){

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
        this.chambreservice.delete(id).subscribe(() => {
          this.getbyhotel() ;

          Swal.fire(
            'Success!',
            'Supprimer avec Success!',
            'success'
          )
        });

        this.getbyhotel() ;
      }
    });
    this.getbyhotel() ;

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
        this.imagehotelsevice.deleteimage(id).subscribe(() => {
          this.getbyid() ;

          Swal.fire(
            'Success!',
            'Supprimer avec Success!',
            'success'
          )
        });

        this.getbyid() ;
      }
    });
    this.getbyid() ;
  }


  ajouterimage(){
    let formData = new FormData();


    formData.append('description' , this.ajoutimageform.value.description)
    formData.append('file', this.fileToUpload[0]);


    if (this.ajoutimageform.invalid){
      return
    } else {
      this.imagehotelsevice.createimage
      ( this.id, formData).subscribe((data)=>{
        Swal.fire(
          'Success!',
          'Ajout avec success!',
          'success'
        )
   this.getbyid() ;
  this.ajoutimageform.reset() ;
this.hiddenaddimage = false ;

      })
      this.getbyid() ;
    }
  }


  handleFileInput(files: any) {

    this.fileToUpload = <Array<File>>files.target.files;
      // this.imgchecked = true ;
    }


    hiddentestaddimage(){
      this.hiddenaddimage = true ;
    }



    getbyhotel(){
this.chambreservice.getallbyhotelle(this.id).subscribe((data)=>{
 this.allchambre = data ;
})
    }

    addchambre(){

this.chambreservice.createchambre(this.id , this.addchambreform.value).subscribe((data)=>{
  Swal.fire(
    'Success!',
    'Ajout avec success!',
    'success'
  )

  this.hiddentestadchambre = false ;
  this.getbyhotel() ;

})
    }
    hiddentestaddchambre(){
      this.hiddentestadchambre = true ;
    }



    patchchambre(chambre){
      this.updatechambreform.patchValue({
        typelogement:chambre.typelogement,
      nblit: chambre.nblit ,
      tarif: chambre.tarif
      })

      this.idchambre = chambre.id ;
      this.hiddentestupdatechambre = true  ;
    }

    updatechambre(){
      console.log("hnee id" , this.idchambre)
      console.log("hne form" , this.updatechambreform.value)
   this.chambreservice.updatechambre(this.idchambre , this.updatechambreform.value).subscribe((data)=>{
    Swal.fire(
      'Success!',
      'Modifier avec Success!',
      'success'
    )
    this.updatechambreform.reset() ;
    this.hiddentestupdatechambre = false ;
    this.getbyhotel() ;
   })
    }
}
