import { Component, OnInit } from "@angular/core";
import { AnimeapiService } from "../../service/animeapi.service";

@Component({
  selector: "app-animelist",
  templateUrl: "./animelist.component.html",
  styleUrls: ["./animelist.component.css"],
  providers: [AnimeapiService]
})
export class AnimelistComponent implements OnInit {
  public characterList: any[] = [];
  public numCharacters:number;
  public nextUrl:string;
  public prevUrl:string;
  constructor(private animeapiService: AnimeapiService) {
    this.characterList = [{name:""}]
  }

  ngOnInit() {
    this.getAllAnimes();
  }

  getAllAnimes() {
    this.animeapiService.getAnimeList().subscribe(
      res => {
        console.log("res");
        console.log(res);
        console.log(res["info"]["count"]);
        this.numCharacters = res["info"]["count"];
        this.characterList = res["results"];
        this.nextUrl = res["info"]["next"];
        this.prevUrl = res["info"]["prev"];
        console.log(this.nextUrl)
        console.log(this.prevUrl)
      },
      err => {
        console.log("err");
        console.log(err);
      }
    );
  }
  getNextPageCharacters() {
    this.animeapiService.getPageCharacters(this.nextUrl).subscribe(
      res => {
        this.characterList = res["results"];
        this.nextUrl = res["info"]["next"];
        this.prevUrl = res["info"]["prev"];
      },
      err => {
        console.log("err");
        console.log(err);
      }
    );
  }

  getPreviousPageCharacters() {
    this.animeapiService.getPageCharacters(this.prevUrl).subscribe(
      res => {
        this.characterList = res["results"];
        this.nextUrl = res["info"]["next"];
        this.prevUrl = res["info"]["prev"];
      },
      err => {
        console.log("err");
        console.log(err);
      }
    );
  }
}
