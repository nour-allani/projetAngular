import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Apartment } from 'src/app/core/Models/apartment';
import { AppartementService } from 'src/app/core/services/appartement.service';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {
  apartForm= new FormGroup({
    id: new FormControl(),
    apartNum: new FormControl('', [Validators.required, Validators.min(1)]),
    floorNum: new FormControl('',Validators.required),
    surface: new FormControl('',Validators.required),
    terrace: new FormControl(''),
    surfaceTerrace: new FormControl(''),
    category: new FormControl(''),
    residence: new FormControl('')
  });
  id!:any;
  idApart!:Number;
  constructor(private actR:ActivatedRoute,private rout:Router, private aparS:AppartementService){}
  
  ngOnInit(){
    this.id=Number(this.actR.snapshot.paramMap.get('id'));
    this.apartForm.patchValue({residence:this.id});
    this.aparS.getAllApartments().subscribe((data) => {this.idApart=data.length+1;
    this.apartForm.patchValue({id:this.idApart})});
    
  }
  get apartNum() { return this.apartForm.get('apartNum'); }
  get floorNum() { return this.apartForm.get('floorNum'); }
  get surface() { return this.apartForm.get('surface'); }
  get surfaceTerrace() { return this.apartForm.get('surfaceTerrace'); }
  get terrace() { return this.apartForm.get('terrace'); }
  get category() { return this.apartForm.get('category'); }
  get residence() { return this.apartForm.get('residence'); }
  
  
  addApart(){
    console.log(this.apartForm.value);
   /* this.aparS.addApartment(this.apartForm.value).subscribe({
      next: () => {
        console.log("Appartement ajouté avec succès !");
        this.rout.navigate(['/apartmens']);
      },
      error: (err) => console.error("Erreur lors de l'ajout :", err)
    });
    */
  }
 
  }