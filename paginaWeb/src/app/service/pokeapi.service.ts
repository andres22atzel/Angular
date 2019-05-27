import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PokeapiService {
  public url: string = "https://pokeapi.co/api/v2/pokemon/";
  public numPokemon: number;
  // subscribe: any;
  //Se envia por parametro al constructor para inicializar el servicio http en una variable (en realidad un atributo) que se va a llamar http
  //HTTP Client SIEMPRE devuelve un Observable
  constructor(private http: HttpClient) {}

  getPokemon() {
    return this.http.get(this.url);
  }
}
