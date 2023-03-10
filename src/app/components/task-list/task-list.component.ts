import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent {

  tasks : Task[] = [];

  constructor(private taskService : TaskService){
    this.taskService.getTasks().subscribe(list => this.tasks = list);
  }

  onAddTask(task : Task) : void {
    this.taskService.addTask(task).subscribe(()=>this.tasks.push(task));
    
  }

  onTaskDelete(task : Task) : void {
    this.taskService.deleteTask(task).subscribe(()=>{
      this.tasks = this.tasks.filter(item => item.id !== task.id);
    });
  }

  onTaskUpdate(task : Task)  : void {
    task.special = !task.special;
    this.taskService.updateTask(task).subscribe(()=>{
      this.tasks.forEach(t => {
        if (t.id === task.id)
        {
          t.special = task.special;
        }
      })
    });
  }
}
