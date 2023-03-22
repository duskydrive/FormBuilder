import { Component } from '@angular/core';
import {CdkDragDrop, copyArrayItem, CdkDragExit} from '@angular/cdk/drag-drop';
import { FormElement } from '../ts/interfaces';
import { DragdropService } from '../service/dragdrop.service';
@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.sass']
})
export class FormBuilderComponent {
  elements: FormElement[] = [];
  disableBool = false;


  constructor(public dragService: DragdropService) {

  }

  onDrop(event: CdkDragDrop<FormElement[]>) {
    this.dragService.drop(event);
  }

  selectElement(el: FormElement) {
    console.log(el)
  }
}
