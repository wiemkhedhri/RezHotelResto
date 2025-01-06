import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http:HttpClient) { }

  getbyid(id:any){
    return this.http.get(`${environment.BasedUrl}/admin/findbyid/${id}` ) ;

  }
  update(id:any , admin:any){
    return this.http.put(`${environment.BasedUrl}/admin/update/${id}` , admin ) ;

  }
}
