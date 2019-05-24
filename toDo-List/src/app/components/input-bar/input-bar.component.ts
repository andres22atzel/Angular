import { Component, OnInit, Output } from "@angular/core";
import { EventEmitter } from "events";
import { Placeholder } from "@angular/compiler/src/i18n/i18n_ast";

@Component({
  selector: "app-input-bar",
  templateUrl: "./input-bar.component.html",
  styleUrls: ["./input-bar.component.scss"]
})
export class InputBarComponent implements OnInit {
  // @Output() shareDataEvent:EventEmitter  = new EventEmitter();
  toDoActivities: string[] = [];
  doneActivities: string[] = [];
  inProcessActivities: string[] = [];
  placeHolder: string = "Introducir una actividad";
  constructor() {}

  ngOnInit() {
    this.verifyLocalStorage();
  }

  verifyLocalStorage() {
    if (localStorage.getItem("toDoActivities") != null) {
      let jsonArrToDoActivities = localStorage.getItem("toDoActivities");
      this.toDoActivities = JSON.parse(jsonArrToDoActivities);
    }
    if (localStorage.getItem("doneActivities") != null) {
      let jsonArrDoneActivities = localStorage.getItem("doneActivities");
      this.doneActivities = JSON.parse(jsonArrDoneActivities);
    }
    if (localStorage.getItem("inProcessActivities") != null) {
      let jsonArrInProcessActivities = localStorage.getItem(
        "inProcessActivities"
      );
    }
  }

  introduceInputActivity(event: any) {
    let activity: string;
    if (event.key === "Enter") {
      activity = event.target.value;
      event.target.value = this.placeHolder;
      this.toDoActivities.push(activity);
      this.introduceToStorage("toDoActivities");
    }
  }

  introduceActivity(activity: string, type: number) {
    let typeActivity: string;
    let typeActivities: string[] = [];
    if (type === 1) {
      typeActivity = "toDoActivities";
      this.toDoActivities.push(activity);
    } else if (type === 2) {
      typeActivity = "inProcessActivities";
      this.inProcessActivities.push(activity);
    } else if (type === 3) {
      typeActivity = "doneActivities";
      this.doneActivities.push(activity);
    }
    this.introduceToStorage(typeActivity);
  }

  introduceToStorage(type: string) {
    localStorage.setItem(type, JSON.stringify(this.toDoActivities));
  }

  updateStorage(type: number) {
    if (type === 1)
      localStorage.setItem(
        "toDoActivities",
        JSON.stringify(this.toDoActivities)
      );
    else if (type === 2)
      localStorage.setItem(
        "doneActivities",
        JSON.stringify(this.doneActivities)
      );
    else if (type === 3)
      localStorage.setItem(
        "inProcessActivities",
        JSON.stringify(this.inProcessActivities)
      );
  }

  deleteActivity(activity: string, type: number) {
    if (type === 1) {
      for (let item of this.toDoActivities) {
        if (item === activity) {
          this.toDoActivities.splice(this.toDoActivities.indexOf(item), 1);
        }
      }
    } else if (type === 2) {
      for (let item of this.inProcessActivities) {
        if (item === activity) {
          this.inProcessActivities.splice(
            this.inProcessActivities.indexOf(item),
            1
          );
        }
      }
    } else if (type === 3) {
      for (let item of this.doneActivities) {
        if (item === activity) {
          this.doneActivities.splice(this.doneActivities.indexOf(item), 1);
        }
      }
    }
    this.updateStorage(type);
  }

  inProcess(activity: string) {
  }
}
