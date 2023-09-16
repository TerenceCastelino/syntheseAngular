import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SyntheseRoutingComponent } from './9Routing/synthese-routing/synthese-routing.component';
import { DependanceRoutingComponent } from './9Routing/dependance-routing/dependance-routing.component';
import { SyntheseRouterlinkComponent } from './9Routing/synthese-routerlink/synthese-routerlink.component';
import { SyntheseRouterComponent } from './9Routing/synthese-router/synthese-router.component';
import { SyntheseActiveRouterComponent } from './9Routing/synthese-active-router/synthese-active-router.component';
import { Profil1Component } from './9Routing/profil1/profil1.component';



const routes: Routes = [
  //mes path routin__________DEBUT______________>
  { path: 'Synthese Routing', component: SyntheseRoutingComponent },
  { path: 'Dependance Routing', component: DependanceRoutingComponent },
  { path: 'SyntheseRouterlinkComponent', component: SyntheseRouterlinkComponent},
  { path: 'SyntheseRouterComponent', component: SyntheseRouterComponent },
  //ActivedRout__Debut __>
  { path: 'SyntheseActiveRouterComponent', component: SyntheseActiveRouterComponent },
  { path: 'profil1/:prenom', component: Profil1Component },
  //ActivedRout__Fin____>
  //mes path routin__________FIN________________>
  //3 cree le path 
  // { path: 'routingPage2', component: Page2RouterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
