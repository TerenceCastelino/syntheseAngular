import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-input-enfant',
  templateUrl: './input-enfant.component.html',
  styleUrls: ['./input-enfant.component.scss']
})
export class InputEnfantComponent {
// 3 input est un recepteur pour une proprietée declarer dans le parent et envoyer a l enfant
// j ai cree un input qui est utiliser a l etape 2 dans parent.compenent.html
//MonInput="{{ uneProprietée_init&declarer dans mon parent.compenent.ts }}
// debut _______________
@Input() MonInput! : string
// Fin _______________
// message2 est simplement une proprietée init et declarer dans mon enfant.compenent.ts
 message2 : string =" -Proprieté init et declarer dans l enfants"
}
// 4 aller dans EnfantComponent.html 
// utiliser les propriétée souhaiter 
