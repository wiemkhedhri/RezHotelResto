import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChambreserviceService {

  constructor(private http:HttpClient) { }
   getallbyhotelle(id:any){
    return this.http.get(`${environment.BasedUrl}/chambre/getbyhotel/${id}`  )  ;
   }
   createchambre(id:any , chambre:any){
    return this.http.post(`${environment.BasedUrl}/chambre/create/${id}`   , chambre)  ;
   }
   delete(id:any){
    return this.http.delete(`${environment.BasedUrl}/chambre/delete/${id}`  )  ;
   }
   updatechambre(id:any , chambre:any){
    return this.http.put(`${environment.BasedUrl}/chambre/modifier/${id}`  , chambre )  ;
   }
}
