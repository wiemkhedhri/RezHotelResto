import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RespohotelServiceService {

  constructor(private http:HttpClient) { }
  getall(){
    return this.http.get(`${environment.BasedUrl}/responsablehotel/findall`) ;
  }

  add(respo:any){
    return this.http.post(`${environment.BasedUrl}/responsablehotel/create`,respo ) ;
  }
  getbyid(id:any){
    return this.http.get(`${environment.BasedUrl}/responsablehotel/getbyid/${id}`) ;
  }
  update(id:any , respohotel:any){
    return this.http.put(`${environment.BasedUrl}/responsablehotel/update/${id}` ,  respohotel) ;

  }
}
