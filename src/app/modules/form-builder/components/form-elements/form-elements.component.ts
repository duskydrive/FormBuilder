import { 
  ChangeDetectionStrategy, 
  Component 
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { FormElement } from '../../../../service/interfaces';
import { DefaultFormElementsService } from '../../../../service/default-form-elements.service';
import { DragdropService } from '../../../../service/dragdrop.service';

@Component({
  selector: 'app-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FormElementsComponent {
  defaultElements$: Observable<FormElement[]> = of(this.formElements.get());
  disableBool = true;
  
  constructor (
    private formElements: DefaultFormElementsService, 
    public dragService: DragdropService
  ) {}

  onDrop(event: CdkDragDrop<Observable<FormElement[]>>) {
    this.dragService.drop(event);
  }
}
