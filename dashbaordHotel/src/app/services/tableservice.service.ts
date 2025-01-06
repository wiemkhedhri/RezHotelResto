import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TableserviceService {

  constructor(private http:HttpClient) { }

  ajouter(table:any , id:any){
    return this.http.post(`${environment.BasedUrl}/table/add/${id}`,table ) ;
  }
  tablebyresto(id:any){
    return this.http.get(`http://localhost:8081/table/byresto/${id}` ) ;

  }
  updatetable(id:any , table:any ){
    return this.http.put(`http://localhost:8081/table/modifier/${id}` , table ) ;

  }
  getbyid(id:any){
    return this.http.get(`http://localhost:8081/table/getbyid/${id}` ) ;
  }
  delete(id:any){
    return this.http.delete(`http://localhost:8081/table/delete/${id}` ) ;

  }
}
