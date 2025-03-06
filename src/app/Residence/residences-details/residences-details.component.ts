import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Residence } from 'src/app/core/Models/residence';

@Component({
  selector: 'app-residences-details',
  templateUrl: './residences-details.component.html',
  styleUrls: ['./residences-details.component.css'],
})
export class ResidencesDetailsComponent {
  id!:number;
  res:Residence|undefined;
   listResidences: Residence[] = [
      {
        id: 1,
        name: 'El fel',
        address: 'Borj Cedria',
        image: '../../assets/images/R4.jpg',
        status: 'Disponible',
      },
      {
        id: 2,
        name: 'El yasmine',
        address: 'Ezzahra',
        image: '../../assets/images/R4.jpg',
        status: 'Disponible',
      },
      {
        id: 3,
        name: 'El Arij',
        address: 'Rades',
        image: '../../assets/images/R4.jpg',
        status: 'Vendu',
      },
      {
        id: 4,
        name: 'El Anber',
        address: 'inconnu',
        image: '../../assets/images/R4.jpg',
        status: 'En Construction',
      },
    ];

  constructor(private act:ActivatedRoute){}
    
  ngOnInit(){
    this.id=this.act.snapshot.params['id'];
    this.act.paramMap.subscribe(param=>{this.id= Number (param.get('id'));
      this.res=this.listResidences.find(res=>res.id===this.id)
    })
  }
  showNext() {
    this.id++;
    if (this.id > this.listResidences.length) {
      this.id = 1;
    }
    this.res = this.listResidences.find((r) => r.id == this.id)!;
  }
  //hook
//constructor(private actR:ActivatedRoute){ }
//id!: number;
//r!: Residence
//ngOnInit()  {
  // 1er methode 
  //this.id = this.actR.snapshot.params['param']
  //2eme methode
   //this.actR.paramMap.subscribe(data => this.id=data.get("id"))
   // paramMap represente l'observable retourne data ou erreur
   // paramMap represente l'observable retourne data ou erreur
   //this.listResidences.find(r=> r.id == this.id);
}
//residence:Residence=new Residence();

