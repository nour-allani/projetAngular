import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidencesComponent } from './Residence/residences/residences.component';
import { ResidencesDetailsComponent } from './Residence/residences-details/residences-details.component';
import { ApartmentsByResidenceComponent } from './Apartements/apartments-by-residence/apartments-by-residence.component';
import { AddResidenceComponent } from './Residence/add-residence/add-residence.component';
import { AddApartmentComponent } from './Apartements/add-apartment/add-apartment.component';
import { UpdateResidenceComponent } from './Residence/update-residence/update-residence.component';

const routes: Routes = [
  {path:"", redirectTo:"residences",pathMatch:'full'},
  {path:"residences",component:ResidencesComponent},
  { path: 'add-residence', component: AddResidenceComponent },
  {path:"residenceD/:param",component:ResidencesDetailsComponent},
  { path: 'add', component: AddApartmentComponent },
  { path: 'update/:param', component: UpdateResidenceComponent },
  {path:"appartment-by-residence/:param",component:ApartmentsByResidenceComponent},
  
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
