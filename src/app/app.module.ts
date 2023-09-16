import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './0NavBar/navbar/navbar.component';
import { SyntheseRoutingComponent } from './9Routing/synthese-routing/synthese-routing.component';

import { SyntheseRouterComponent } from './9Routing/synthese-router/synthese-router.component';
import { SyntheseRouterlinkComponent } from './9Routing/synthese-routerlink/synthese-routerlink.component';
import { SyntheseActiveRouterComponent } from './9Routing/synthese-active-router/synthese-active-router.component';
import { DependanceRoutingComponent } from './9Routing/dependance-routing/dependance-routing.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SyntheseRoutingComponent,

    SyntheseRouterComponent,
    SyntheseRouterlinkComponent,
    SyntheseActiveRouterComponent,
    DependanceRoutingComponent,



    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
