import { 
  Directive,
  EventEmitter,
  Injectable, Input, Output, 
} from "@angular/core";

@Injectable()
@Directive()

export abstract class FormElementStandard {
  @Input() elementId = '';

  @Input() placeholderText = '';

  @Input() width = 0;
  
  @Input() height = 0;

  @Input() required = false;

  @Input() borderWidth = '';

  @Input() borderColor = '';

  @Input() borderStyle = '';

  @Input() fontSize = 0;

  @Input() fontWeight = 0;

  @Input() color = '';

  @Input() backgroundColor = '';

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

  public bindFunc(e: MouseEvent): void {
    this.triggerSelect.emit(e);
  }

}