import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-synthese-active-router',
  templateUrl: './synthese-active-router.component.html',
  styleUrls: ['./synthese-active-router.component.scss']
})
export class SyntheseActiveRouterComponent {
  prenom! :string
  constructor(private _maRoute:Router){
  
  }
  
  dirigerVersProfil(){
    if (this.prenom) {
       this._maRoute.navigate(['profil1/'+this.prenom])
    }
  }

}
