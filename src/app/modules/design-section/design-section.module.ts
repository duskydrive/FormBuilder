import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from 'src/app/shared/material-design/material-design.module';

import { DesignSectionComponent } from './design-section.component';
import { FormElementDesignComponent } from './components/form-element-design/form-element-design.component';
import { RemoveElementButtonComponent } from './components/form-element-design/components/remove-element-button/remove-element-button.component';
import { FormGeneralDesignComponent } from './components/form-general-design/form-general-design.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InputRowComponent } from './components/rows/input-row/input-row.component';
import { InputCheckboxRowComponent } from './components/rows/input-checkbox-row/input-checkbox-row.component';
import { InputColorRowComponent } from './components/rows/input-color-row/input-color-row.component';
import { SelectRowComponent } from './components/rows/select-row/select-row.component';
import { ForObjectPipe } from 'src/app/shared/pipes/for-object.pipe';
import { DisplayRowsComponent } from './components/display-rows/display-rows.component';
import { LabelTransformPipe } from 'src/app/shared/pipes/label-transform.pipe';
@NgModule({
  declarations: [
    DesignSectionComponent,
    FormElementDesignComponent,
    RemoveElementButtonComponent,
    FormGeneralDesignComponent,
    InputRowComponent,
    InputCheckboxRowComponent,
    InputColorRowComponent,
    SelectRowComponent,
    ForObjectPipe,
    DisplayRowsComponent,
    LabelTransformPipe,
  ],
  imports: [
    CommonModule,
    MaterialDesignModule,
    SharedModule,
  ],
  exports: [
    DesignSectionComponent,
    FormElementDesignComponent,
    RemoveElementButtonComponent,
    FormGeneralDesignComponent,
    InputRowComponent,
  ],
  providers: [ForObjectPipe, LabelTransformPipe]
})
export class DesignSectionModule { }
