import { Component } from '@angular/core';
import { Residence } from 'src/app/core/Models/residence';
import { ResidenceService } from 'src/app/core/services/residence.service';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
 
  constructor(private resServ:ResidenceService) { }
  listResidences:Residence[]=[ ];
    
  ngOnInit(){
   //this.listResidences=this.resServ.getResidence();
   this.resServ.getResidence().subscribe(
    data => this.listResidences=data,
    erreur =>console.log("erreur"),
    ()=>console.log("le chargementdes residences est terminés ")
    
   );
   }
    selectedResidenceId: number | null = null;
    showadd(R:Residence)
    { if (R.address== 'inconnu')
       {alert('inconnu');

       }else  this.selectedResidenceId = this.selectedResidenceId === R.id ? null : R.id;
    }
    getStatusIcon(status: string) {
      switch (status) {
        case 'Disponible': return '✅';
        case 'En Construction': return '🚧';
        case 'Vendu': return '❌';
        default: return '';
      } 
    }favorites: Residence[] = [];
    addToFavorites(residence: Residence) {
      if (!this.favorites.includes(residence)) {
        this.favorites.push(residence);
      }
    }
    searchText: string = '';
        get filteredResidences() {
          return this.listResidences.filter(residence =>
            residence.address.toLowerCase().includes(this.searchText.toLowerCase())
          );
        }
        delete(id:number){
          this.resServ.deleteResidence(id).subscribe(()=>this.resServ.getResidence().subscribe(
            data => this.listResidences=data,
            erreur =>console.log("erreur"),
            ()=>console.log("le chargementdes residences est terminés ")
            ));
        }
}
