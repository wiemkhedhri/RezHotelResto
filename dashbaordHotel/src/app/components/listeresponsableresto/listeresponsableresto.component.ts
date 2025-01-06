import { ResporestoServiceService } from 'src/app/services/resporesto-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listeresponsableresto',
  templateUrl: './listeresponsableresto.component.html',
  styleUrls: ['./listeresponsableresto.component.css']
})
export class ListeresponsablerestoComponent implements OnInit {
  listerespo:any ;
  constructor(private resposervice:ResporestoServiceService) {
    this.getall() ;
  }

  ngOnInit(): void {
    this.getall() ;
  }

  getall(){
    this.resposervice.getall().subscribe((data)=>{
      this.listerespo = data ;
    })
  }
}
