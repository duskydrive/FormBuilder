import { 
  ChangeDetectionStrategy, 
  Component, 
  Input, 
} from '@angular/core';
import { FormElement } from '../../../../shared/service/interfaces';
import { AccordionManipulatorService } from '../../../../shared/service/accordion-manipulator.service';
import { SendElementIdService } from '../../../../shared/service/send-element-id.service';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FormElementComponent {
  @Input() element!: FormElement;
  
  constructor( 
    public changeAccordion: AccordionManipulatorService,
    public sendId: SendElementIdService) {}

  selectElement(event: MouseEvent) {
    if (event.target instanceof HTMLButtonElement) {
      event.preventDefault();
    }
    this.changeAccordion.callToggle.next( true );
    this.sendId.passId( this.element.id );
  }
}