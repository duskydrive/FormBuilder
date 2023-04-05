import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent {
  @Input() id = '';
  @Input() placeholderText = '';
  @Output() triggerChange = new EventEmitter();

  public bindFunc(data: any): void {
    this.triggerChange.emit(data);
  }
}
