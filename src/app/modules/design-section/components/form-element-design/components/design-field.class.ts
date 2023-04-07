import { 
  Directive,
  EventEmitter,
  Injectable, Input, Output, 
} from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { KeyValuePair, OptionField } from "src/app/shared/ts/interfaces";
import { AppState } from "src/app/shared/state/app.state";
import { updateFormElement } from "src/app/shared/state/formbuilder/formbuilder.actions";
import { SelectOptionsService } from "../../services/select-options.service";

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

  borderStylesOptions$: Observable<{ id: string; content: string; }[]> = of(this.localOptionsService.getBorderStyles());
  fontWeightOptions$: Observable<{ id: string; content: number; }[]> = of(this.localOptionsService.getFontWeights());

  public bindFunc(obj: any): void {
    this.triggerChange.emit(obj);
  }

  public bindCheckboxFunc($event: Event): void {
    const checkboxValue = ($event.target as HTMLInputElement).checked;
    this.triggerChange.emit({key: 'required', val: checkboxValue});
  }

  constructor(public localOptionsService: SelectOptionsService) {}
}