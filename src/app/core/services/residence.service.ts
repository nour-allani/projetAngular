import { Injectable } from '@angular/core';
import { Residence } from '../Models/residence';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
  
listResidences:Residence[]=[
    
    ];
  constructor(private http:HttpClient) { }
  url="http://localhost:3000/Residences"
  getResidence() : Observable<Residence[]> // Residence[]
   {
    //return this.listResidences; //lorsqu'on reload la page res ajouté sera supprimé
    return this.http.get<Residence[]>(this.url);
}
addResidence(residence: Residence): Observable<Residence> {
  return this.http.post<Residence>(this.url, residence);
}

deleteResidence(id:number){
  return this.http.delete(this.url+'/'+id);
}
getResidenceByID(id:number){
  return this.http.get<Residence>(this.url+'/'+id);
}
updateResidence(residence:Residence){
  return this.http.put(this.url+'/'+residence.id,residence);
}
}
