import { Component, OnInit } from "@angular/core";
import { PokeapiService } from "../../service/pokeapi.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-pokemon-detail",
  templateUrl: "./pokemon-detail.component.html",
  styleUrls: ["./pokemon-detail.component.css"]
})
export class PokemonDetailComponent implements OnInit {
  public pokemon: any;
  public nombrePokemon: string;
  public nombrePokemonAPedir: any;
  constructor(
    private pokeService: PokeapiService,
    private route: ActivatedRoute
  ) {
    this.pokemon = { name: "", sprites: { front_default: "" } };
  }

  ngOnInit() {
    this.route.params.subscribe(
      parametros => {
        console.log("Parametros de ruta");
        console.log(parametros);
        this.nombrePokemonAPedir = parametros.nombrePokemon;
        this.getIndividualPokemon();
      },
      error => {}
    );
  }
  getIndividualPokemon() {
    this.pokeService.getPokemonDetail(this.nombrePokemonAPedir).subscribe(
      res => {
        console.log("res");
        console.log(res);
        this.pokemon = res;
        console.log(this.pokemon);
      },
      err => {
        console.log("err");
        console.log(err);
      }
    );
  }
}
