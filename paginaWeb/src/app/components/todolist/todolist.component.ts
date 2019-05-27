import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-todolist",
  templateUrl: "./todolist.component.html",
  styleUrls: ["./todolist.component.css"]
})
export class TodolistComponent implements OnInit {
  placeHolder: string = "Introducir una actividad";
  containers: any[] = [
    {
      id: 1,
      name: "toDoContainer",
      title: "Tareas por hacer",
      childContainer: "toDoActivitiesContainer",
      activityArray:["Hola","HTML"],
      typeActivity: "toDoActivity"
    },
    {
      id: 2,
      name: "inProcessContainer",
      title: "Tareas en proceso",
      childContainer: "inProcessActivitiesContainer",
      activityArray:["java"],
      typeActivity: "inProcessActivity"
    },
    {
      id: 3,
      name: "doneContainer",
      title: "Tareas completadas",
      childContainer: "doneActivitiesContainer",
      activityArray:["css"],
      typeActivity: "doneActivity"
    }
  ];
  entradaTexto:string;
  constructor() {}

  ngOnInit() {}

  addTask(){
    this.containers[0].activityArray.push(this.entradaTexto);
    this.entradaTexto = "";
  }
}
