import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from 'src/app/core/Models/residence';
import { ResidenceService } from 'src/app/core/services/residence.service';

@Component({
  selector: 'app-update-residence',
  templateUrl: './update-residence.component.html',
  styleUrls: ['./update-residence.component.css']
})
export class UpdateResidenceComponent 
 { 
  id!:number;
  residence!:Residence;
  updateForm!: FormGroup;
  constructor (  private actR:ActivatedRoute,
    private  resServ:ResidenceService,private router: Router,){}
  
  ngOnInit(){
    
    this.updateForm = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.required),
      address: new FormControl('', [Validators.required, Validators.minLength(5)]),
      image: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required)})
      this.resServ.getResidenceByID(this.id).subscribe((data) => {
        if (data) {
          this.updateForm.patchValue(data); // Injecte les valeurs récupérées
        }
    });
  }
  updateResidence() {
      this.resServ.updateResidence(this.residence).subscribe(() => {
        console.log('Résidence mise à jour avec succès');
        this.router.navigate(['/residences']); // Redirection après mise à jour
      });
    }
}
 
