import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() text : string = "task-item";
  @Input() special : boolean = false;
  
  @Output() onDelete : EventEmitter<any> = new EventEmitter();


  onDeleteClicked() : void {
    this.onDelete.emit();
  }
}
