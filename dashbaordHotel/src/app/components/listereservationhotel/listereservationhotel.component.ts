import { Component, OnInit } from '@angular/core';
import { ReservserviceService } from 'src/app/services/reservservice.service';

@Component({
  selector: 'app-listereservationhotel',
  templateUrl: './listereservationhotel.component.html',
  styleUrls: ['./listereservationhotel.component.css']
})
export class ListereservationhotelComponent implements OnInit {
  allreservation:any ;
  currentuser : any  ;
  currentuseItem = localStorage.getItem('currentuser') ;
  constructor(private reservservice:ReservserviceService) {
    this.currentuser = this.currentuseItem !=null? JSON.parse(this.currentuseItem) : null;
  }

  ngOnInit(): void {
    this.getbyrespo()  ;
  }

  getbyrespo(){
this.reservservice.listebyhotel(this.currentuser.id).subscribe((data)=>{
this.allreservation = data ;
})
}
}
