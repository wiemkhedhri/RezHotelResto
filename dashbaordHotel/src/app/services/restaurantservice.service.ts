import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestaurantserviceService {

  constructor(private http:HttpClient) { }
  ajouter(resto:any , id:any){
    return this.http.post(`${environment.BasedUrl}/restaurant/addresto/${id}`,resto ) ;
  }
  getbyresponsable(id:any){

    return this.http.get(`${environment.BasedUrl}/restaurant/findbyrespo/${id}` ) ;

  }
  delete(id:any){
    return this.http.delete(`${environment.BasedUrl}/restaurant/delete/${id}` ) ;
  }
  miseajourimage(id:any , image:any){

    return this.http.put(`${environment.BasedUrl}/restaurant/updateimage/${id}`  , image) ;
  }
  update(id:any , resto:any){
    return this.http.put(`${environment.BasedUrl}/restaurant/update/${id}`  , resto) ;
  }
  getbyid(id:any){
    return this.http.get(`${environment.BasedUrl}/restaurant/getbyid/${id}` ) ;
  }

  getall(){
    return this.http.get(`${environment.BasedUrl}/restaurant/getall` ) ;
  }
}
