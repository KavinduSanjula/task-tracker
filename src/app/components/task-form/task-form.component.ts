import { Component, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {

  @Output() onAddTask : EventEmitter<Task> = new EventEmitter;

  text : string = '';
  special : boolean = false;

  formState : boolean = false;
  subscription : Subscription;

  constructor(private uiService : UiService){
    this.subscription = uiService.onFormToggle().subscribe(value => this.formState = value);
  }

  onSubmit() : void {
    if(this.text === ''){
      alert('Insert proper task!');
      return;
    }

    let newTask : Task = {
      text : this.text,
      special : this.special,
    }

    this.onAddTask.emit(newTask);

    this.text = '';
    this.special = false;

  }
}
