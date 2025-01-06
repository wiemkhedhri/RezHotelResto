import { ReservserviceService } from './../../services/reservservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listereservations',
  templateUrl: './listereservations.component.html',
  styleUrls: ['./listereservations.component.css']
})
export class ListereservationsComponent implements OnInit {
  currentuser : any  ;
  currentuseItem = localStorage.getItem('currentuser') ;
  allreservation : any ;
  constructor(private reservservice:ReservserviceService) {
    this.currentuser = this.currentuseItem !=null? JSON.parse(this.currentuseItem) : null;
   }

  ngOnInit(): void {
    this.getall() ;
  }
getall(){
  this.reservservice.getbyrespo(this.currentuser.id).subscribe((data)=>{
    this.allreservation = data ;
  })
}
}
