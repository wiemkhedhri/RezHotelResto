import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { RespohotelServiceService } from 'src/app/services/respohotel-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajout-respo-hotel',
  templateUrl: './ajout-respo-hotel.component.html',
  styleUrls: ['./ajout-respo-hotel.component.css']
})
export class AjoutRespoHotelComponent implements OnInit {
Ajoutform : any ;
  constructor(private fb:FormBuilder , private responhotelservice: RespohotelServiceService , private router:Router) { }

  ngOnInit(): void {
    this.Ajoutform = this.fb.group({
      nom :['' , Validators.required] ,
      prenom :['' , Validators.required] ,
      motpasse :['' , Validators.required] ,
      telephone:['' , Validators.required] ,
      email:['' , Validators.required] ,
      role: ['responsablehotel']
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
        }else {
          this.responhotelservice.add(this.Ajoutform.value).subscribe(()=>{
            Swal.fire(
              'Success!',
              'Ajout avec success!',
              'success'
            )
            this.router.navigateByUrl('/home/respohotel')
           })
        }


       }


}
