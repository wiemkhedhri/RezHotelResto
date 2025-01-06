import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResporestoServiceService {

  constructor(private http:HttpClient) { }

  add(respo:any){
    return this.http.post(`${environment.BasedUrl}/responsableresto/create`,respo ) ;
  }
  getall(){
    return this.http.get(`${environment.BasedUrl}/responsableresto/findall` ) ;

  }
  getbyid(id:any){
    return this.http.get(`${environment.BasedUrl}/responsableresto/findbyid/${id}` ) ;

  }
  update(id:any , resporesto:any){
    return  this.http.put(`${environment.BasedUrl}/responsableresto/update/${id}` , resporesto) ;
  }
}
