import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CronometerComponent } from './components/cronometer/cronometer.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { GridImagesNatureComponent } from './components/grid-images-nature/grid-images-nature.component';

@NgModule({
  declarations: [
    AppComponent,
    CronometerComponent,
    NavComponent,
    FooterComponent,
    GridImagesNatureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
