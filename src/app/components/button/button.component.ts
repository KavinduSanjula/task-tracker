import { Component, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent {

  @Input() btnText: string = "Button";
  @Output() onButtonClick : EventEmitter<any> = new EventEmitter();


  onClick() : void {
    this.onButtonClick.emit();
  }

}
