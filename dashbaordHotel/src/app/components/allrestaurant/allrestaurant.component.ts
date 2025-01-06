import { RestaurantserviceService } from 'src/app/services/restaurantservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allrestaurant',
  templateUrl: './allrestaurant.component.html',
  styleUrls: ['./allrestaurant.component.css']
})
export class AllrestaurantComponent implements OnInit {
listeresto:any ;
  constructor(private restoservice:RestaurantserviceService) { }

  ngOnInit(): void {
    this.getallrestaurant() ;
  }

  getallrestaurant(){
    this.restoservice.getall().subscribe((data)=>{
      this.listeresto = data ;
    })
  }
}
