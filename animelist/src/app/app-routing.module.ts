import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Importacion de rutas
import { AnimelistComponent } from "./components/animelist/animelist.component";
import { AnimecharactersComponent } from "./components/animecharacters/animecharacters.component";

const routes: Routes = [
  { path: "anime", component: AnimelistComponent },
  { path: "character", component: AnimecharactersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
