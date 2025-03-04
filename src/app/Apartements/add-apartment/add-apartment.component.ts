import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {
  apartForm=new FormGroup({
    apartmentNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
    floorNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
    surface: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
    terrace: new FormControl(false),
    surfaceTerrace: new FormControl({ value: '', disabled: true }),
    category: new FormControl('S+1', Validators.required),
    residence: new FormControl('', Validators.required),
    });


  onSubmit() {
    if (this.apartForm.valid) {
      console.log('Form Submitted', this.apartForm.value);
      // Traiter la soumission du formulaire ici (par exemple, envoyer les données à un serveur)
    } else {
      console.log('Form is invalid');
    }
  }
  }


