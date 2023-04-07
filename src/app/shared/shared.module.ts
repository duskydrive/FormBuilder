import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputColorComponent } from './components/input-color/input-color.component';
import { SelectComponent } from './components/select/select.component';
import { ButtonComponent } from './components/button/button.component';
import { InputCheckboxComponent } from './components/input-checkbox/input-checkbox.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { ForObjectPipe } from './pipes/for-object.pipe';
import { LabelTransformPipe } from './pipes/label-transform.pipe';

@NgModule({
  declarations: [
    InputComponent,
    InputColorComponent,
    SelectComponent,
    ButtonComponent,
    InputCheckboxComponent,
    TextareaComponent,
    // LabelTransformPipe,
    // ForObjectPipe,
  ],
  exports: [
    InputComponent,
    InputColorComponent,
    SelectComponent,
    ButtonComponent,
    InputCheckboxComponent,
    TextareaComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    // ForObjectPipe,
    // LabelTransformPipe,
  ]
})
export class SharedModule { }