import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profil1',
  templateUrl: './profil1.component.html',
  styleUrls: ['./profil1.component.scss']
})
export class Profil1Component implements OnInit {
  message!:string
constructor(private _monActiveRoute : ActivatedRoute){

}
ngOnInit(): void {
 this.message = this._monActiveRoute.snapshot.params['prenom']  
 console.log(this.message);
 
}

}
