import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  formState : boolean = false;

  constructor(private uiService : UiService){
    this.uiService.onFormToggle().subscribe(value => this.formState = value);
  }

  onBtnClicked() : void {
    this.uiService.toggleForm();
  }

}
