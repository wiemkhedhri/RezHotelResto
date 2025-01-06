import { Component, OnInit } from '@angular/core';
import { ReservserviceService } from 'src/app/services/reservservice.service';

@Component({
  selector: 'app-allreservresto',
  templateUrl: './allreservresto.component.html',
  styleUrls: ['./allreservresto.component.css']
})
export class AllreservrestoComponent implements OnInit {
  listereserv:any ;
  constructor(private reservservice:ReservserviceService) { }

  ngOnInit(): void {
    this.getallreservation() ;
  }

  getallreservation(){
    this.reservservice.allreservresto().subscribe((data)=>{
      this.listereserv = data ;
    })
  }
}
