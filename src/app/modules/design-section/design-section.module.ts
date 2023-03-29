import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from 'src/app/shared/material-design/material-design.module';

import { DesignSectionComponent } from './design-section.component';
import { FormElementDesignComponent } from './components/form-element-design/form-element-design.component';
import { ButtonFieldComponent } from './components/form-element-design/components/button-field/button-field.component';
import { CheckboxFieldComponent } from './components/form-element-design/components/checkbox-field/checkbox-field.component';
import { RemoveElementButtonComponent } from './components/form-element-design/components/remove-element-button/remove-element-button.component';
import { SelectFieldComponent } from './components/form-element-design/components/select-field/select-field.component';
import { StandardFieldComponent } from './components/form-element-design/components/standard-field/standard-field.component';
import { FormGeneralDesignComponent } from './components/form-general-design/form-general-design.component';
import { FormGeneralDesignViewComponent } from './components/form-general-design/form-general-design-view/form-general-design-view.component';



@NgModule({
  declarations: [
    DesignSectionComponent,
    FormElementDesignComponent,
    ButtonFieldComponent,
    CheckboxFieldComponent,
    RemoveElementButtonComponent,
    SelectFieldComponent,
    StandardFieldComponent,
    FormGeneralDesignComponent,
    FormGeneralDesignViewComponent,
  ],
  imports: [
    CommonModule,
    MaterialDesignModule,
  ],
  exports: [
    DesignSectionComponent,
    FormElementDesignComponent,
    ButtonFieldComponent,
    CheckboxFieldComponent,
    RemoveElementButtonComponent,
    SelectFieldComponent,
    StandardFieldComponent,
    FormGeneralDesignComponent,
    FormGeneralDesignViewComponent,
  ]
})
export class DesignSectionModule { }
