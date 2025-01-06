import { Component, OnInit } from '@angular/core';
import { ReservserviceService } from 'src/app/services/reservservice.service';

@Component({
  selector: 'app-allreservhotels',
  templateUrl: './allreservhotels.component.html',
  styleUrls: ['./allreservhotels.component.css']
})
export class AllreservhotelsComponent implements OnInit {
listereservation : any ;
  constructor(private reservservice:ReservserviceService) { }

  ngOnInit(): void {
    this.getall() ;
  }

  getall(){
    this.reservservice.allreservhotesl().subscribe((data)=>{
      this.listereservation = data ;
    })
  }
}
