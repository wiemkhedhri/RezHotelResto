import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservserviceService {

  constructor(private http:HttpClient) { }

  getbyrespo(id:any){
    return this.http.get(`${environment.BasedUrl}/reservresto/byrestaurant/${id}`  )  ;  ;
    }
  listebyhotel(id:any){
    return this.http.get(`${environment.BasedUrl}/reservChambre/byrespo/${id}`  )  ;  ;
  }
  allreservresto(){
    return this.http.get(`${environment.BasedUrl}/reservresto/getall`  )  ;  ;
  }
  allreservhotesl(){
    return this.http.get(`${environment.BasedUrl}/reservChambre/getall`  )  ;  ;
  }
}
