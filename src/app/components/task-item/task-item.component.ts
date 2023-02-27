import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  faCross = faTrash;

  @Input() text : string = "task-item";
  @Input() special : boolean = false;
  
  @Output() onDelete : EventEmitter<any> = new EventEmitter();
  @Output() onToggle : EventEmitter<any> = new EventEmitter();



  onDeleteClicked() : void {
    this.onDelete.emit();
  }

  onDoubleClick() : void {
    this.onToggle.emit();
  }

}
