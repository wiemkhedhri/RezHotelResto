import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentuser : any  ;
currentuseItem = localStorage.getItem('currentuser') ;
  constructor(private router:Router) {
    this.currentuser = this.currentuseItem !=null? JSON.parse(this.currentuseItem) : null;
   }

  ngOnInit(): void {
  }
logout(){
  localStorage.removeItem('currentuser') ,
  localStorage.removeItem('status')
  localStorage.removeItem('role')
  this.router.navigateByUrl('')  ;
}
}
