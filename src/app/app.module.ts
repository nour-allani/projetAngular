import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { CoreComponent } from './core/core.component';
import { ResidencesComponent } from './Residence/residences/residences.component';
import { ResidencesDetailsComponent } from './Residence/residences-details/residences-details.component';
import { AddResidenceComponent } from './Residence/add-residence/add-residence.component';
import { ApartmentComponent } from './Apartements/apartment/apartment.component';
import { ApartmentsByResidenceComponent } from './Apartements/apartments-by-residence/apartments-by-residence.component';
import { AddApartmentComponent } from './Apartements/add-apartment/add-apartment.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    CoreComponent,
    ResidencesComponent,
    ResidencesDetailsComponent,
    AddResidenceComponent,
    ApartmentComponent,
    ApartmentsByResidenceComponent,
    AddApartmentComponent,
    NotFoundComponent,
    HomeComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
