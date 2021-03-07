import { Component, OnInit } from '@angular/core';
  
//interface
interface toDoTask{
  taskDesc:string;
  taskStatus:boolean;
  uniqueId:number;
}
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  showPlaceHolder:string="type here";
  title:string="To Do APP";
  inputTask:string="";

  toDoTaskList:toDoTask[]=[];
  constructor() { }

  ngOnInit(): void {
  }

//method
addTask(inputTask:string)
{ 
  document.getElementById("empty").style.display = "none";
  this.toDoTaskList.push({taskDesc:inputTask, taskStatus:false, uniqueId:Math.floor(Math.random()*100)});
}

removeTask(id:number){
  this.toDoTaskList.splice(this.toDoTaskList.findIndex(task => task.uniqueId==id),1);
}
}
