import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { FormElement } from '../service/interfaces';
import { AccordionManipulatorService } from '../service/accordion-manipulator.service';
import { SendElementIdService } from '../service/send-element-id.service';
@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormElementComponent {
  @Input() element!: FormElement;
  @Input() isDisabled!: boolean;
  
  constructor(private store: Store<AppState>, public changeAccordion: AccordionManipulatorService,
    public sendId: SendElementIdService) {}

  selectElement() {
    this.changeAccordion.callToggle.next( true );
    this.sendId.passId( this.element.id );
  }
}