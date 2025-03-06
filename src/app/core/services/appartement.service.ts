import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apartment } from '../Models/apartment';

@Injectable({
  providedIn: 'root'
})
export class AppartementService {
listApartments:Apartment[]=[
    
    ];
  urlA='http://localhost:3000/apartments';
  constructor( private http:HttpClient) { }

  getAllApartments(){
    return this.http.get<Apartment[]>(this.urlA);
  }

  getApartmentById(id:number){
    return this.http.get<Apartment>(this.urlA+'/'+id);
  }

  addApartment(apartment:Apartment){
    return this.http.post<Apartment>(this.urlA,apartment);
  }

  updateApartment(apartment:Apartment){
    let id=apartment.apartNum;
    return this.http.put<Apartment>(this.urlA+'/'+id,   apartment);
  }

  deleteApartment(id:number){
    return this.http.delete<Apartment>(this.urlA+'/'+id);
  }
}
