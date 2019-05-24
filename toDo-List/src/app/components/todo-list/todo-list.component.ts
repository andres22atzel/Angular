import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  // toDoActivity:string;
  // @Input() activity:any;
  constructor() { }

  ngOnInit() {
  }

  // receivedActivity(){
  //   this.toDoActivity = this.activity;
  //   console.log(this.toDoActivity);
  // }

}
