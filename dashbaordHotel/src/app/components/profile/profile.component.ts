import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { RespohotelServiceService } from 'src/app/services/respohotel-service.service';
import { ResporestoServiceService } from 'src/app/services/resporesto-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentuser : any  ;
currentuseItem = localStorage.getItem('currentuser') ;
user:any ;
updatevrai:Boolean=false ;
updateform:FormGroup ;
  constructor(private authservice:AuthserviceService , private fb:FormBuilder , private adminservice:AdminserviceService , private respohotelservice:RespohotelServiceService , private resporestoservice:ResporestoServiceService) {
    this.currentuser = this.currentuseItem !=null? JSON.parse(this.currentuseItem) : null;
   }

  ngOnInit(): void {
    this.getbyid() ;
    this.updateform = this.fb.group({
      nom :['' ] ,
      prenom :['' ] ,
      telephone:['' ] ,
      email:['' ] ,


    })
  }

  getbyid(){
  this.authservice.getbyid(this.currentuser.id).subscribe((data)=>{
this.user = data  ;
  })
  }


update(){
if(this.user.role=="admin"){
  this.adminservice.update(this.currentuser.id , this.updateform.value).subscribe((data)=>{
    Swal.fire(
      'Success!',
      'Mise a jour avec Success!',
      'success'
    )
    this.getbyid() ;
  })

}
else
if(this.user.role=="responsablehotel"){
  this.respohotelservice.update(this.currentuser.id ,  this.updateform.value).subscribe((data)=>{
    Swal.fire(
      'Success!',
      'Mise a jour avec Success!',
      'success'
    )
    this.getbyid() ;
  })

}
else
if(this.user.role=="responsableresto")
{
  this.resporestoservice.update(this.currentuser.id , this.updateform.value).subscribe((data)=>{
    Swal.fire(
      'Success!',
      'Mise a jour avec Success!',
      'success'
    )
    this.getbyid() ;

  })
}
this.updatevrai= false


}
testbutton(){
  this.updatevrai = true ;
  this.updateform.patchValue({
nom:this.user.nom ,
prenom:this.user.prenom  ,
email:this.user.email ,
telephone:this.user.telephone
  })
}
}
