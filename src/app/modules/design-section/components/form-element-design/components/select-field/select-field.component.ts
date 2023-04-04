import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { SelectOptionPair, SelectOption, AddSelectOption } from 'src/app/shared/service/interfaces';
import { DesignField } from '../design-field.class';


@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.sass']
})

export class SelectFieldComponent extends DesignField {
  constructor() {
    super()
  }
  @ViewChild('option') optionInput!: ElementRef;
  @Input() selectOptions: SelectOption[] = [];

  @Output() triggerAddOption = new EventEmitter();
  @Output() triggerRemoveOption = new EventEmitter();
  @Output() triggerClearInput = new EventEmitter();

  public bindAddOption(obj: SelectOptionPair): void {
    this.triggerAddOption.emit({
      selectId: obj.selectId,
      optionId: Date.now().toString(),
      value: obj.value,
    });
    this.bindClearInput()
  }

  public bindRemoveOption(obj: SelectOptionPair): void {
    this.triggerRemoveOption.emit(obj);
  }

  public bindClearInput(): void {
    this.triggerClearInput.emit(this.optionInput);
  }
}
