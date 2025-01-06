import { AuthserviceService } from './../../services/authservice.service';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
LoginForm:FormGroup ;
user:any ;
  constructor(private fb:FormBuilder , private authservice:AuthserviceService , private router:Router) { }

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      email:['',Validators.required] ,
      motpasse:['',Validators.required]
    })
  }

  login(){


    if (this.LoginForm.invalid) {


      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You have to write your email and your password!',
      })
      return;
    }
  else
          {
    this.authservice.authentification(this.LoginForm.value).subscribe(
    (admin:any)=>{
  {
    this.user=admin;
    console.log("here user :",this.user)
    if( this.user.role=='admin') {
      localStorage.setItem('currentuser',JSON.stringify((admin))) ;
      localStorage.setItem('status','1')
      localStorage.setItem('role','admin')
      this.router.navigateByUrl('/home')

    }
    else
    if(this.user.role=='responsablehotel')
    {
      localStorage.setItem('currentuser',JSON.stringify((admin))) ;
      localStorage.setItem('status','1')
      localStorage.setItem('role','responsablehotel')
      this.router.navigateByUrl('/home/listehotels')
    }
    else
    if(this.user.role=='responsableresto'){
      localStorage.setItem('currentuser',JSON.stringify((admin))) ;
      localStorage.setItem('status','1')
      localStorage.setItem('role','responsableresto')
      this.router.navigateByUrl('/home/listeresto')
    }

    Swal.fire(
      'Succes!',
      'Log in Successfully !',
      'success'
    )

    console.log("this is the person logged in " , this.user)
  }

  } , (error)=>{
    Swal.fire({
      icon: 'error',

      text: 'Your email or your password is wrong!',
    })
  }
  )

  }



    }


}
