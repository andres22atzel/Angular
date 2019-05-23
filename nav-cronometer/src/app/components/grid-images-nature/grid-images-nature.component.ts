import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-grid-images-nature",
  templateUrl: "./grid-images-nature.component.html",
  styleUrls: ["./grid-images-nature.component.css"]
})
export class GridImagesNatureComponent implements OnInit {
  imagesSrc:string[] = ["../../../assets/img/image1","../../../assets/img/image2","../../../assets/img/image3","../../../assets/img/image4","../../../assets/img/image5","../../../assets/img/image6"]
  showFuego: boolean;
  showTierra: boolean;
  showAgua: boolean;
  showAire: boolean;

  flagModal:boolean = false;
  classModal:string = "modal hideModal";
  sourceImageModal:string;
  eventModal:any;

  constructor() {}

  ngOnInit() {
    this.mostrar(0);
  }

  mostrar(typeMostrar: number) {
    if (typeMostrar === 0) {
      this.showFuego = true;
      this.showTierra = true;
      this.showAgua = true;
    } else if (typeMostrar === 1) {
      this.showFuego = true;
      this.showTierra = false;
      this.showAgua = false;
    } else if (typeMostrar === 2) {
      this.showFuego = false;
      this.showTierra = true;
      this.showAgua = false;
    } else if (typeMostrar === 3) {
      this.showFuego = false;
      this.showTierra = false;
      this.showAgua = true;
    } else if (typeMostrar === 4) {
      this.showFuego = false;
      this.showTierra = false;
      this.showAgua = false;
    }
  }

  verModal(event:any){
    this.eventModal = event;
    // console.log(this.eventModal.path[0].parentElement.nextSibling.src);
    this.sourceImageModal = this.eventModal.path[0].parentElement.nextSibling.src;
    if(this.flagModal === false){
      this.classModal = "modal showModal"
      this.flagModal = true;
  }
  else{
    this.classModal = "modal showModal hideModalAnimation"
      setTimeout(()=>{
          this.classModal = "modal hideModal hideModalAnimation"
          this.flagModal = false;
      },1000);
  }
  }

  modal(){
    this.verModal(this.eventModal);
  }
}
