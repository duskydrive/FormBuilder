import { 
  Directive,
  EventEmitter,
  Injectable, Input, Output, 
} from "@angular/core";

@Injectable()
@Directive()

export abstract class Row {
  @Input() type!: string; 
  @Input() id!: string; 
  @Input() value!: string | number | boolean; 
  @Input() fieldKey!: string; 
  @Input() labelText!: string; 
  @Input() options!: any[] | null; 
  @Output() triggerChange = new EventEmitter();

  public bindFunc(obj: any): void {
    this.triggerChange.emit(obj);
  }
}