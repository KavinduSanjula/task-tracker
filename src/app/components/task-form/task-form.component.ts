import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {

  formState : boolean = false;
  subscription : Subscription;

  constructor(private uiService : UiService){
    this.subscription = uiService.onFormToggle().subscribe(value => this.formState = value);
  }
}
