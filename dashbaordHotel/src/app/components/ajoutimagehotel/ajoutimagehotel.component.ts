import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagehotelservideService } from 'src/app/services/imagehotelservide.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajoutimagehotel',
  templateUrl: './ajoutimagehotel.component.html',
  styleUrls: ['./ajoutimagehotel.component.css']
})
export class AjoutimagehotelComponent implements OnInit {
  id = this.route.snapshot.params['id'] ;
  Ajoutform:FormGroup ;
  fileToUpload: Array<File> = [];
  constructor(private route:ActivatedRoute  , private fb:FormBuilder , private imageservice:ImagehotelservideService , private router:Router) { }

  ngOnInit(): void {
    this.Ajoutform = this.fb.group({
      image:['' , Validators.required] ,
      description:['' , Validators.required]
    })
  }
  ajout(){
    let formData = new FormData();


    formData.append('description' , this.Ajoutform.value.description)
    formData.append('file', this.fileToUpload[0]);


    if (this.Ajoutform.invalid){
      return
    } else {
      this.imageservice.createimage
      ( this.id, formData).subscribe((data)=>{
        Swal.fire(
          'Success!',
          'Ajout avec success!',
          'success'
        )
        this.router.navigateByUrl(`/home/detaillehotel/${this.id}`)



      })
    }
  }

  handleFileInput(files: any) {

    this.fileToUpload = <Array<File>>files.target.files;
      // this.imgchecked = true ;
    }
}
