import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { SelectOptionPair, SelectOption } from 'src/app/shared/ts/interfaces';
import { SelectOptionsService } from '../../../services/select-options.service';
import { DesignField } from '../design-field.class';


@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SelectFieldComponent extends DesignField {
  optionsService: SelectOptionsService = new SelectOptionsService()

  constructor(optionsService: SelectOptionsService) {
    super(optionsService)
  }

  @ViewChild('option', { static: false }) public optionInput!: ElementRef;
  @Input() selectOptions: SelectOption[] = [];

  @Output() triggerAddOption = new EventEmitter();
  @Output() triggerRemoveOption = new EventEmitter();
  @Output() triggerClearInput = new EventEmitter();

  public bindAddOption(obj: SelectOptionPair): void {
    if (obj.value === undefined || obj.value.trim() === '') {return}
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
