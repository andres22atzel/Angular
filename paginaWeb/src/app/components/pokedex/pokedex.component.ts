import { Component, OnInit } from "@angular/core";
import { PokeapiService } from "../../service/pokeapi.service";

@Component({
  selector: "app-pokedex",
  templateUrl: "./pokedex.component.html",
  styleUrls: ["./pokedex.component.css"],
  providers:[PokeapiService]
})
export class PokedexComponent implements OnInit {
  numPokemon:number;
  constructor(private pokeapiService: PokeapiService) {}

  ngOnInit() {
    this.pokeapiService.getPokemon().subscribe(
      res => {
        console.log("res");
        console.log(res);
        this.numPokemon = res["count"];
      },
      err => {
        console.log("err");
        console.log(err);
      }
    );
  }
}
