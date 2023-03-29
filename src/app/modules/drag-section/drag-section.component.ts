import { 
  ChangeDetectionStrategy, 
  Component 
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { FormElement } from '../../shared/service/interfaces';
import { DefaultFormElementsService } from './services/default-form-elements.service';
import { DragdropService } from '../../shared/service/dragdrop.service';

@Component({
  selector: 'app-drag-section',
  templateUrl: './drag-section.component.html',
  styleUrls: ['./drag-section.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DragSectionComponent {
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
