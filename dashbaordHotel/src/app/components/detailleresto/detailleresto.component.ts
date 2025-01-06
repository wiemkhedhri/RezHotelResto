import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantserviceService } from 'src/app/services/restaurantservice.service';
import { TableserviceService } from 'src/app/services/tableservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detailleresto',
  templateUrl: './detailleresto.component.html',
  styleUrls: ['./detailleresto.component.css']
})
export class DetaillerestoComponent implements OnInit {
  id = this.route.snapshot.params['id'] ;
  tableinfo:any ;
  fileToUpload:Array<File>=[] ;
  updatevrai:Boolean = false ;
  updateform:FormGroup ;
  table:any ;
  updateformimage:FormGroup ;
  hiddenimage: Boolean = false ;
  restaurant:any ;
  addtablehidden:Boolean = false ;
  addtableform:FormGroup ;
  constructor(private router:Router , private route:ActivatedRoute  ,  private restoservice:RestaurantserviceService,  private tableservice:TableserviceService , private fb:FormBuilder ) { }

  ngOnInit(): void {
    this.getbyresto()  ;
    this.getrestaurant() ;
    this.updateform =  this.fb.group({
      nom:[''] ,
      nbchaise:['']
    })

    this.updateformimage = this.fb.group({
      file:['']
    })
    this.addtableform = this.fb.group({
      nom:[''] , nbchaise:['']
    })
    }


    getrestaurant(){
  this.restoservice.getbyid(this.id).subscribe((data)=>{
    this.restaurant = data
  })
    }
getbyresto(){
  this.tableservice.tablebyresto(this.id).subscribe((data)=>{
this.tableinfo = data ;
console.log(data)
  } , (error)=>{
    console.log(error)
  }

  )
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
      this.tableservice.delete(id).subscribe(() => {

        this.getbyresto() ;
        Swal.fire(
          'Success!',
          'Supprimer avec Success!',
          'success'
        )
      });

      this.getbyresto() ;
    }
  });
  this.getbyresto() ;
}

modifier(id){
  this.updatevrai = true ;
this.tableservice.getbyid(id).subscribe((data)=>{
  this.table = data
  this.updateform.patchValue({
    nbchaise: this.table.nbchaise , nom: this.table.nom
  })
})
}
miseajour(id){
  this.hiddenimage = true ;
}

handleFileInput(files: any) {
  this.fileToUpload = <Array<File>>files.target.files;
  console.log(this.fileToUpload)
}
update(){


this.tableservice.updatetable(this.table.id , this.updateform.value).subscribe((data)=>{
  Swal.fire(
    'Success!',
    'Modifier avec  success!',
    'success'
  )
  this.updatevrai = false ;
  this.getbyresto() ;
})
}

updateimage(){

    let formData = new FormData() ;
    formData.append('file',this.fileToUpload[0])

  this.restoservice.miseajourimage(this.restaurant.id , formData).subscribe((data)=>{
    Swal.fire(
      'Success!',
      'Modifier avec  success!',
      'success'
    )
    this.getrestaurant() ;
    this.hiddenimage = false ;



  })


  }

clickaddtable(){
  this.addtablehidden = true  ;
}
  ajoutertable(){
  this.tableservice.ajouter(this.addtableform.value , this.id).subscribe((data)=>{
    this.getbyresto() ;
    Swal.fire(
      'Success!',
      'Modifier avec  success!',
      'success'
    )
    this.addtablehidden = false ;
    this.addtableform.reset() ;

  })
  }
}

