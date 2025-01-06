import { Component, OnInit } from '@angular/core';
import { HotelservicesService } from 'src/app/services/hotelservices.service';

@Component({
  selector: 'app-allhotels',
  templateUrl: './allhotels.component.html',
  styleUrls: ['./allhotels.component.css']
})
export class AllhotelsComponent implements OnInit {
listehotls:any ;
  constructor(private hotelservice:HotelservicesService) { }

  ngOnInit(): void {
    this.getall() ;
  }

  getall(){
    this.hotelservice.getall().subscribe((data)=>{
      this.listehotls = data  ;
    })
  }
}
