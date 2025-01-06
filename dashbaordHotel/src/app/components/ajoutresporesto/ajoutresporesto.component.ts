import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResporestoServiceService } from 'src/app/services/resporesto-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajoutresporesto',
  templateUrl: './ajoutresporesto.component.html',
  styleUrls: ['./ajoutresporesto.component.css']
})
export class AjoutresporestoComponent implements OnInit {
Ajoutform:any ;
  constructor(private fb:FormBuilder , private resposervice:ResporestoServiceService , private router:Router ) { }

  ngOnInit(): void {
    this.Ajoutform = this.fb.group({
      nom :['' , Validators.required] ,
      prenom :['' , Validators.required] ,
      motpasse :['' , Validators.required] ,
      telephone:['' , Validators.required] ,
      email:['' , Validators.required] ,
      role: ['responsableresto']

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
    this.resposervice.add(this.Ajoutform.value).subscribe(()=>{
      Swal.fire(
        'Success!',
        'Ajout avec success!',
        'success'
      )
      this.router.navigateByUrl('/home')

    })
  } }
}
