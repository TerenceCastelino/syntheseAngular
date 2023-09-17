import { Component } from '@angular/core';

@Component({
  selector: 'app-inputparent',
  templateUrl: './inputparent.component.html',
  styleUrls: ['./inputparent.component.scss']
})
export class InputparentComponent {
   // Debut _____________________________________________
  // 1 ici je declare et init des proprietées dans le parent.compenent.ts
  // ____________________________________
  // Dans mon parent.compenent.html j ai mis 2 balises <app-enfant>
  // et je vais placer une propriotée dans chaque
  // ____________________________________
  message1 : string = "1er Proprietée declarer et initialiser dans le parent pour envoyer dans l enfant"
  message2 : string ="2er Proprietée declarer et initialiser dans le parent pour envoyer dans l enfant"
}
  // fin _____________________________________________
  // 2 _>>
  //  pour utiliser les proprietées aller dans parent.compenent.html 
  // entrer MonInput="leNomDeLaPropriéteé"dans la app-enfant 
  //monInput est sera crée a l etape3 dans mon enfant.compenent.ts @input() monInput! : string