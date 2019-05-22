import { Component, OnInit, AfterViewInit, OnDestroy } from "@angular/core";
import { Renderer2, ViewChild, ElementRef } from "@angular/core";
@Component({
  selector: "app-cronometer",
  templateUrl: "./cronometer.component.html",
  styleUrls: ["./cronometer.component.css"]
})
export class CronometerComponent implements OnInit, AfterViewInit, OnDestroy {
  /****Creacion de ElementRef de partes del reloj */
  @ViewChild("posicionCentral") posicionCentral: ElementRef;
  @ViewChild("hourHand") hourHand: ElementRef;
  @ViewChild("minuteHand") minuteHand: ElementRef;
  @ViewChild("secondHand") secondHand: ElementRef;

  @ViewChild("comenzar") comenzar: ElementRef;
  @ViewChild("parar") parar: ElementRef;
  @ViewChild("guardar") guardar: ElementRef;
  @ViewChild("reiniciar") reiniciar: ElementRef;
  @ViewChild("borrar") borrar: ElementRef;

  @ViewChild("tiempos") tiempos: ElementRef;

  /** Fin creacion de ElementRed de partes de reloj */
  milisegundosText: string = "00";
  segundosText: string = "00";
  minutosText: string = "00";
  horasText: string = "00";
  milisegundos = 0;
  segundos = 0;
  minutos = 0;
  horas = 0;
  intervalMilisegundos = 99;
  intervalHoras = 23;
  interval = 59;
  temp;
  timer = [];
  last;
  grados = 0;

  constructor(private renderer: Renderer2) {}
  ngOnInit() {}

  ngAfterViewInit() {
    // this.renderer.setStyle(this.hourHand.nativeElement, "top", '8px');
  }

  ngOnDestroy() {
    if (this.temp) {
      clearInterval(this.temp);
    }
  }

  zero(num: number) {
    if (num <= 9) {
      return `0${num}`;
    } else {
      return String(num);
    }
  }

  crono() {
    let gradosMinutos = 0;
    this.temp = setInterval(() => {
      if (this.intervalMilisegundos > this.milisegundos) {
        this.milisegundosText = this.zero(this.milisegundos);
        this.milisegundos++;
      } else if (this.interval > this.segundos) {
        this.milisegundos = 0;
        this.grados += 6;
        // document.querySelector('.second-hand').style.transform = `rotate(${grados}deg)`;
        this.segundos++;
        this.segundosText = this.zero(this.segundos);
        this.milisegundosText = this.zero(this.milisegundos);
      } else if (this.interval > this.minutos) {
        this.milisegundos = 0;
        this.segundos = 0;
        this.minutos++;
        this.grados = 0;
        // document.querySelector('.second-hand').style.transform = `rotate(${grados}deg)`;
        gradosMinutos += 6;
        // document.querySelector('.minute-hand').style.transform = `rotate(${grados}deg)`;
        this.minutosText = this.zero(this.minutos);
        this.segundosText = this.zero(this.segundos);
        this.milisegundosText = this.zero(this.milisegundos);
      } else if (this.intervalHoras > this.horas) {
        this.milisegundos = 0;
        this.segundos = 0;
        this.minutos = 0;
        this.horas++;
        gradosMinutos = 0;
        // document.querySelector('.minute-hand').style.transform = `rotate(${grados}deg)`;
        this.horasText = this.zero(this.horas);
        this.minutosText = this.zero(this.minutos);
        this.segundosText = this.zero(this.segundos);
        this.milisegundosText = this.zero(this.milisegundos);
      }
      // if(this.segundos===2){
      //   clearInterval(this.temp);
      // }
    }, 10);
  }

  start() {
    this.crono();
    this.enabled(this.comenzar, false);
    this.enabled(this.parar, true);
    this.enabled(this.guardar, true);
    this.enabled(this.reiniciar, false);
    this.enabled(this.borrar, true);
  }

  stop() {
    console.log("Entro");
    this.ngOnDestroy();
    this.enabled(this.comenzar, false);
    this.enabled(this.parar, false);
    this.enabled(this.guardar, false);
    this.enabled(this.reiniciar, true);
    this.enabled(this.borrar, true);
  }

  // save (){
  //     let saveTime = `${this.zero(this.horas)} : ${this.zero(this.minutos)} : ${this.zero(this.segundos)} : ${this.zero(this.milisegundos)}`;
  //     this.timer.push(document.createElement("div"));
  //     this.last = this.timer.length-1;
  //     this.timer[this.last].classList.add("clockContainer");
  //     this.timer[this.last].classList.add("special");
  //     this.timer[this.last].appendChild(document.createElement("P"));
  //     this.timer[this.last].lastChild.innerHTML = saveTime;
  //     this.timer[this.last].lastChild.appendChild(document.createElement("IMG"));
  //     this.timer[this.last].lastChild.lastElementChild.setAttribute("src","../../../assets/img/close.svg");
  //     this.timer[this.last].lastChild.lastElementChild.addEventListener("click",function(){
  //         this.parentElement.parentElement.classList.add("hide");
  //     });
  //     this.renderer.appendChild(this.tiempos.nativeElement,this.timer[this.last])
  // };

  save() {
    let saveTime = `${this.zero(this.horas)} : ${this.zero(
      this.minutos
    )} : ${this.zero(this.segundos)} : ${this.zero(this.milisegundos)}`;
    this.timer.push(this.renderer.createElement("div"));
    this.last = this.timer.length - 1;
    // this.renderer.addClass(this.timer[this.last].nativeElement,"clockContainer")
    // console.log(this.timer[this.last]);
    // this.timer[this.last].classList.add("special");
    // this.timer[this.last].appendChild(document.createElement("P"));
    // this.timer[this.last].lastChild.innerHTML = saveTime;
    // this.timer[this.last].lastChild.appendChild(document.createElement("IMG"));
    // this.timer[this.last].lastChild.lastElementChild.setAttribute(
    //   "src",
    //   "../../../assets/img/close.svg"
    // );
    // this.timer[this.last].lastChild.lastElementChild.addEventListener(
    //   "click",
    //   function() {
    //     this.parentElement.parentElement.classList.add("hide");
    //   }
    // );
    // this.renderer.appendChild(
    //   this.tiempos.nativeElement,
    //   this.timer[this.last]
    // );
  }

  restart() {
    clearInterval(this.temp);
    this.crono();
    this.enabled(this.comenzar, false);
    this.enabled(this.parar, true);
    this.enabled(this.guardar, true);
    this.enabled(this.reiniciar, false);
    this.enabled(this.borrar, true);
  }

  erase() {
    this.ngOnDestroy();
    this.horas = 0;
    this.minutos = 0;
    this.segundos = 0;
    this.milisegundos = 0;
    this.milisegundosText = this.zero(this.milisegundos);
    this.segundosText = this.zero(this.segundos);
    this.minutosText = this.zero(this.minutos);
    this.horasText = this.zero(this.horas);
    this.enabled(this.comenzar, true);
    this.enabled(this.parar, false);
    this.enabled(this.guardar, false);
    this.enabled(this.reiniciar, false);
    this.enabled(this.borrar, false);
    // let pTags = document.querySelectorAll('.special');
    // for(let i = 0; i < pTags.length; i++){
    //     pTags[i].remove();
    //     timer.pop();
    // }
  }

  enabled(item: ElementRef, boolean: boolean) {
    if (boolean === false) {
      this.renderer.setAttribute(item.nativeElement, "disabled", "true");
      this.renderer.addClass(item.nativeElement, "disabled");
    } else {
      this.renderer.removeAttribute(item.nativeElement, "disabled");
      this.renderer.removeClass(item.nativeElement, "disabled");
    }
  }

  // centro(item: ElementRef) {
  //   let elementoCentro = this.renderer
  //     .selectRootElement(this.posicionCentral.nativeElement)
  //     .getBoundingClientRect();
  //   let elementoCentroAnchura = elementoCentro.height;
  //   let clockHand = this.renderer
  //     .selectRootElement(item.nativeElement)
  //     .getBoundingClientRect();
  //   let clockHandAltura = clockHand.width;
  //   let centroTop = (elementoCentroAnchura - clockHandAltura) / 2;
  //   console.log(centroTop);
  //   this.renderer.setStyle(item.nativeElement, "top", '8px');
  //}
}
