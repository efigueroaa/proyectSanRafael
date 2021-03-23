import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { ReglamentoComponent } from './reglamento/reglamento.component';
import { PrincipalComponent } from './principal/principal.component';
import { SabatinaComponent } from './categorias/sabatina/sabatina.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    CategoriasComponent,
    PromocionesComponent,
    ReglamentoComponent,
    PrincipalComponent,
    SabatinaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
