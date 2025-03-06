import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apartment } from 'src/app/core/Models/apartment';
import { Residence } from 'src/app/core/Models/residence';
import { AppartementService } from 'src/app/core/services/appartement.service';
import { ResidenceService } from 'src/app/core/services/residence.service';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent {
  id!:number;
  listResidences!:Residence[]
  listApartments!:Apartment[]
  list:Apartment[]=[];
    
constructor(private actR:ActivatedRoute, private residenceS:ResidenceService, private apartS: AppartementService){}

ngOnInit(){
/*this.residenceS.getResidence().subscribe(data => this.listResidences=data);
this.apartS.getAllApartments().subscribe(data => this.listApartments=data);


this.id=Number(this.actR.snapshot.paramMap.get('x'));
this.list=this.listApartments.filter((appart:Apartment)=>appart.residence.id==this.id)
}*/
this.id = Number(this.actR.snapshot.paramMap.get('x'));

  this.residenceS.getResidence().subscribe(data => this.listResidences = data);

  this.apartS.getAllApartments().subscribe(data => {
    this.listApartments = data;
    this.list = this.listApartments.filter((appart: Apartment) => appart.residence.id === this.id);
  });
}
}
