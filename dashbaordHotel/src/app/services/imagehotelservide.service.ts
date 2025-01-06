import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImagehotelservideService {

  constructor(private http:HttpClient) { }


  createimage(id:any  , image:any){
    return this.http.post(`${environment.BasedUrl}/imagehotel/createimage/${id}` , image )   ;
    }
    getbyhotel(id:any){
      return this.http.get(`${environment.BasedUrl}/imagehotel/getallbyhotel/${id}`  )   ;
    }
    deleteimage(id:any){
      return this.http.delete(`${environment.BasedUrl}/imagehotel/delete/${id}`  )   ;
    }
}
