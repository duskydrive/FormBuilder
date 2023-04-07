import { 
  ChangeDetectionStrategy, 
  Component, 
  Input, 
} from '@angular/core';
import { FormElement } from 'src/app/shared/ts/interfaces';
import { AccordionManipulatorService } from 'src/app/shared/service/accordion-manipulator.service';
import { SendElementIdService } from 'src/app/shared/service/send-element-id.service';
import { FormElementType } from 'src/app/shared/ts/form-element-type.enum';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FormElementComponent {
  @Input() element!: FormElement;
  // enum for switch statement in template
  public formElementType: typeof FormElementType = FormElementType;
  
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