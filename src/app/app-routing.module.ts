import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidencesComponent } from './Residence/residences/residences.component';
import { ResidencesDetailsComponent } from './Residence/residences-details/residences-details.component';
import { ApartmentsByResidenceComponent } from './Apartements/apartments-by-residence/apartments-by-residence.component';

const routes: Routes = [
  {path:"", redirectTo:"residences",pathMatch:'full'},
  {path:"residences",component:ResidencesComponent},
  {path:"residenceD/:param",component:ResidencesDetailsComponent},
  {path:"appartment-by-residence/:param",component:ApartmentsByResidenceComponent},

  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
