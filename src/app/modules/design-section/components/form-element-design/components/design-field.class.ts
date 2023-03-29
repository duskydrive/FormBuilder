import { 
  Directive,
  EventEmitter,
  Injectable, Input, Output, 
} from "@angular/core";
import { KeyValuePair, OptionField } from "src/app/shared/service/interfaces";

@Injectable()
@Directive()

export abstract class DesignField {
  @Input() designId = '';
  @Input() designPlaceholder = '';
  @Input() designWidth = 0;
  @Input() designHeight = 0;
  @Input() designRequired = false;
  @Input() designBorderWidth = '';
  @Input() designBorderColor = '';
  @Input() designBorderStyle = '';
  @Input() designFontSize = 0;
  @Input() designFontWeight = 0;
  @Input() designColor = '';
  @Input() designBackgroundColor = '';
  @Output() triggerChange = new EventEmitter();

  public bindFunc(obj: OptionField | KeyValuePair): void {
    this.triggerChange.emit(obj);
  }

}