import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-synthese-routing',
  templateUrl: './synthese-routing.component.html',
  styleUrls: ['./synthese-routing.component.scss']
})
export class SyntheseRoutingComponent {
  dependance :string = 'Dependance Routing'
  routerLink :string = 'SyntheseRouterlinkComponent'
  router :string = 'SyntheseRouterComponent'
  activeRoute :string = 'SyntheseActiveRouterComponent'
  // 2 Le constructeur permet d initialiser une redirection vers un autre compenent
  constructor(private _nomDeRoute : Router){

  }
  //4 Implementer une methode qui sera lier avec un evenement dans le HTML sur un boutton
  redirection(x:string){
    //this._LeNomDeMonrouteurDansLeConstructor.nvigate(['leNomDeMonPath'])
    this._nomDeRoute.navigate([x])
  }
}
