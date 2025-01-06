import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelservicesService {

  constructor(private http:HttpClient) { }
  ajouter(hotel:any , id:any){
    return this.http.post(`${environment.BasedUrl}/hotel/create/${id}`  , hotel)  ;
    }
    getbyrespo(id:any){
      return this.http.get(`${environment.BasedUrl}/hotel/getbyrespo/${id}` )  ;
    }
    delete(id:any){
      return this.http.delete(`${environment.BasedUrl}/hotel/delete/${id}` )  ;
    }

    modifier(id:any , hotel:any){
      return this.http.put(`${environment.BasedUrl}/hotel/update/${id}` , hotel )  ;
    }

    getall(){
      return this.http.get(`${environment.BasedUrl}/hotel/getall` )  ;
    }



}
