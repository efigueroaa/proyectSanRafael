import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PrincipalComponent } from './principal/principal.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { ReglamentoComponent } from './reglamento/reglamento.component';


const routes: Routes = [
  {path:'contacto',component:ContactoComponent},
  {path:'categorias',component:CategoriasComponent},
  {path:'promociones',component:PromocionesComponent},
  {path:'reglamento',component:ReglamentoComponent},
  {path:'principal',component:PrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
