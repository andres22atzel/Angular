import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PokeapiService {
  public urlBase: string = "https://pokeapi.co/api/v2/";
  public numPokemon: number;
  // subscribe: any;
  //Se envia por parametro al constructor para inicializar el servicio http en una variable (en realidad un atributo) que se va a llamar http
  //HTTP Client SIEMPRE devuelve un Observable
  constructor(private http: HttpClient) {}

  getPokemon() {
    return this.http.get(this.urlBase + "pokemon/");
  }
  //pase por parametro la URL que quiero pedir
  getPagePokemon(url: string) {
    return this.http.get(url);
  }

  getPokemonDetail(namePokemon: string) {
    return this.http.get(this.urlBase + "pokemon/"+namePokemon);
  }
}
