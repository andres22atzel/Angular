import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { NavegadorComponent } from './components/navegador/navegador.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import {FormsModule} from '@angular/forms';
import { PokedexComponent } from './components/pokedex/pokedex.component'
import {HttpClientModule} from '@angular/common/http';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ServiciosComponent,
    NavegadorComponent,
    TodolistComponent,
    PokedexComponent,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
