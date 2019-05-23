import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Importacion de componentes de rutas
import { HomeComponent } from "./components/home/home.component"
import { ServiciosComponent } from "./components/servicios/servicios.component"
import { ContactComponent } from "./components/contact/contact.component"
const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"servicios",component:ServiciosComponent},
  {path:"contact",component:ContactComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
