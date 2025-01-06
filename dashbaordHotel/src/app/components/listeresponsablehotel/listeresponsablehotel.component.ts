import { Component, OnInit } from '@angular/core';
import { RespohotelServiceService } from 'src/app/services/respohotel-service.service';

@Component({
  selector: 'app-listeresponsablehotel',
  templateUrl: './listeresponsablehotel.component.html',
  styleUrls: ['./listeresponsablehotel.component.css']
})
export class ListeresponsablehotelComponent implements OnInit {
listerespo:any ;
  constructor(private responservice: RespohotelServiceService) {
    this.getall() ;
  }

  ngOnInit(): void {
    this.getall() ;
  }


  getall(){
    this.responservice.getall().subscribe((data)=>{
this.listerespo = data ;
    })
  }
}
