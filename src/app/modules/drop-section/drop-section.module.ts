import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from 'src/app/shared/material-design/material-design.module';

import { DropSectionComponent } from './drop-section.component';
import { DropSectionFormViewComponent } from './components/drop-section-form-view/drop-section-form-view.component';
import { DropSectionListViewComponent } from './components/drop-section-list-view/drop-section-list-view.component';
import { FormElementComponent } from './components/form-element/form-element.component';
import { ButtonElementComponent } from './components/form-element/components/button-element/button-element.component';
import { CheckboxElementComponent } from './components/form-element/components/checkbox-element/checkbox-element.component';
import { InputElementComponent } from './components/form-element/components/input-element/input-element.component';
import { SelectElementComponent } from './components/form-element/components/select-element/select-element.component';
import { TextareaElementComponent } from './components/form-element/components/textarea-element/textarea-element.component';



@NgModule({
  declarations: [
    DropSectionComponent,
    DropSectionFormViewComponent,
    DropSectionListViewComponent,
    FormElementComponent,
    ButtonElementComponent,
    CheckboxElementComponent,
    InputElementComponent,
    SelectElementComponent,
    TextareaElementComponent,
  ],
  imports: [
    CommonModule,
    MaterialDesignModule,
  ],
  exports: [
    DropSectionComponent,
    DropSectionFormViewComponent,
    DropSectionListViewComponent,
    FormElementComponent,
    ButtonElementComponent,
    CheckboxElementComponent,
    InputElementComponent,
    SelectElementComponent,
    TextareaElementComponent,
  ]
})
export class DropSectionModule { }
