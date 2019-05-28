import { Component, OnInit } from "@angular/core";
import { PokeapiService } from "../../service/pokeapi.service";

@Component({
  selector: "app-pokedex",
  templateUrl: "./pokedex.component.html",
  styleUrls: ["./pokedex.component.css"],
  providers: [PokeapiService]
})
export class PokedexComponent implements OnInit {
  public numPokemon: number;
  public listaPokemon: string[] = [];
  public nextUrl: string;
  public previousUrl: string;
  constructor(private pokeapiService: PokeapiService) {}

  ngOnInit() {
    this.getAllPokemon();
  }
  getAllPokemon() {
    this.pokeapiService.getPokemon().subscribe(
      res => {
        console.log("res");
        console.log(res);
        this.numPokemon = res["count"];
        this.listaPokemon = res["results"];
        this.nextUrl = res["next"];
        this.previousUrl = res["previous"];
      },
      err => {
        console.log("err");
        console.log(err);
      }
    );
  }
  getNextPagePokemon() {
    this.pokeapiService.getPagePokemon(this.nextUrl).subscribe(
      res => {
        console.log("res");
        console.log(res);
        this.numPokemon = res["count"];
        this.listaPokemon = res["results"];
        this.nextUrl = res["next"];
        this.previousUrl = res["previous"];
      },
      err => {
        console.log("err");
        console.log(err);
      }
    );
  }

  getPreviousPagePokemon() {
    this.pokeapiService.getPagePokemon(this.previousUrl).subscribe(
      res => {
        console.log("res");
        console.log(res);
        this.numPokemon = res["count"];
        this.listaPokemon = res["results"];
        this.nextUrl = res["next"];
        this.previousUrl = res["previous"];
      },
      err => {
        console.log("err");
        console.log(err);
      }
    );
  }
}
