import { Component, OnInit } from "@angular/core";
import { PokeapiService } from "../../service/pokeapi.service";

@Component({
  selector: "app-pokemon-detail",
  templateUrl: "./pokemon-detail.component.html",
  styleUrls: ["./pokemon-detail.component.css"]
})
export class PokemonDetailComponent implements OnInit {
  public pokemon: any;
  public nombrePokemon: string;
  constructor(private pokeService: PokeapiService) {
    this.pokemon = { name: "", sprites: { front_default: "" } };
  }

  ngOnInit() {
    this.getIndividualPokemon();
  }
  getIndividualPokemon() {
    this.pokeService.getPokemonDetail("necrozma").subscribe(
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
