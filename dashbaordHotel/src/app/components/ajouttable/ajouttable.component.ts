import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TableserviceService } from 'src/app/services/tableservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajouttable',
  templateUrl: './ajouttable.component.html',
  styleUrls: ['./ajouttable.component.css']
})
export class AjouttableComponent implements OnInit {
id = this.route.snapshot.params['id'] ;
Ajoutform:FormGroup ;
currentuser : any  ;
currentuseItem = localStorage.getItem('currentuser') ;
  constructor(private route:ActivatedRoute , private fb:FormBuilder , private tableserice:TableserviceService , private router:Router) {
    this.currentuser = this.currentuseItem !=null? JSON.parse(this.currentuseItem) : null;

  }

  ngOnInit(): void {
    console.log( "hedhy id el resto ", this.id)
    this.Ajoutform = this.fb.group({
      nbchaise:['' , Validators.required] ,
      nom:['' , Validators.required]
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
  }else  {

 this.tableserice.ajouter(this.Ajoutform.value ,this.id).subscribe(()=>{
  Swal.fire(
    'Success!',
    'Ajout avec success!',
    'success'
  )
  this.router.navigateByUrl(`/home/listeresto`)
 })

  }
}
}
