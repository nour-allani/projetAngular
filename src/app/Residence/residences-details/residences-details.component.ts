import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Residence } from 'src/app/core/Models/residence';

@Component({
  selector: 'app-residences-details',
  templateUrl: './residences-details.component.html',
  styleUrls: ['./residences-details.component.css'],
})
export class ResidencesDetailsComponent {
constructor(private actR:ActivatedRoute){ }
id!: number;
ngOnInit()  {
  this.id = this.actR.snapshot.params['param']
}
residence:Residence=new Residence();
}
