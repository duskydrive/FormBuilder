/* eslint-disable @typescript-eslint/no-empty-function */
import { Directive, EventEmitter, Injectable, Input, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Injectable()
@Directive()

export abstract class HtmlComponent implements ControlValueAccessor {

  @Input() type = '';
  @Input() id = '';
  @Input() fieldKey = '';
  @Input() options: string[] | number[] | null = [];
  @Input() elementId = '';
  @Input() placeholderText!: string;
  @Input() width!: number;
  @Input() height!: number;
  @Input() required!: boolean;
  @Input() borderWidth!: string;
  @Input() borderColor!: string;
  @Input() borderStyle!: string;
  @Input() fontSize!: number;
  @Input() fontWeight!: number;
  @Input() color!: string;
  @Input() backgroundColor!: string;

  public get widthPercent(): string {
    return `${this.width}%`;
  }
  
  public get widthPx(): string {
    return `${this.width}px`;
  }
  
  public get heightPx(): string {
    return `${this.height}px`;
  }
  
  public get borderWidthPx(): string {
    return `${this.borderWidth}px`;
  }
  
  public get fontSizePx(): string {
    return `${this.fontSize}px`;
  }
  
  @Output() triggerSelect = new EventEmitter();
  @Output() triggerChange = new EventEmitter();

  public bindSelect(e: MouseEvent): void {
    this.triggerSelect.emit(e);
  }

  public bindFunc(obj: any): void {
    this.triggerChange.emit(obj);
  }

  public bindCheckboxFunc($event: Event): void {
    const checkboxValue = ($event.target as HTMLInputElement).checked;
    this.triggerChange.emit({key: 'required', value: checkboxValue});
  }


  private _value: any;

  @Input() 
  set value(value: any) {
    this._value = value;
    this.updateValue(value);
  }

  get value(): any {
    return this._value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(outsideValue: number) {
    this.value = outsideValue;
  }

  updateValue(insideValue: number) {
    this.onChange(insideValue);
    this.onTouched();
    
  }

  private onChange = (value: any) => {};
  private onTouched = () => {};
}