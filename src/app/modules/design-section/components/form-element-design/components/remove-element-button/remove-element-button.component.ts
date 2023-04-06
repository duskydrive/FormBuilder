import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-remove-element-button',
  templateUrl: './remove-element-button.component.html',
  styleUrls: ['./remove-element-button.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemoveElementButtonComponent {
  @Input() elementId = '';
  @Input() elementType = '';
  @Output() triggerRemoveElement = new EventEmitter();

  public bindRemoveElement(id: string): void {
    this.triggerRemoveElement.emit(id);
  }

}
