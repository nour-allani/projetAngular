import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Residence } from 'src/app/core/Models/residence';
import { ResidenceService } from 'src/app/core/services/residence.service';
@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {
addForm=new FormGroup({
  id:new FormControl(0),
  name:new FormControl('',Validators.required),
  address:new FormControl('',[Validators.required, Validators.minLength(5)]),
  image:new FormControl('',Validators.required),
  status:new FormControl('',Validators.required)
});
constructor(private resServ:ResidenceService, private rout:Router) { }
get name(){
  return this.addForm.get('name');
}
get address(){
  return this.addForm.get('address');
}
res!:Residence;
saveResidence(F:FormGroup){
   
   this.res={...F.value}; //... concatiner avec l id les autres valeurs 
  
   console.log(this.res);
  // this.resServ.addResidence(this.res)
  this.resServ.addResidence(this.res).subscribe(
    ()=> {console.log("Residences ajoutés avec succes");
      this.rout.navigate(['/residences']);

    }
  )
   this.rout.navigate(['/residences']);

}




}

