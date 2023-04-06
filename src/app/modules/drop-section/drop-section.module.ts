import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from 'src/app/shared/material-design/material-design.module';

import { DropSectionComponent } from './drop-section.component';
import { DropSectionFormViewComponent } from './components/drop-section-form-view/drop-section-form-view.component';
import { DropSectionListViewComponent } from './components/drop-section-list-view/drop-section-list-view.component';
import { FormElementComponent } from './components/form-element/form-element.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DropSectionComponent,
    DropSectionFormViewComponent,
    DropSectionListViewComponent,
    FormElementComponent,
  ],
  imports: [
    CommonModule,
    MaterialDesignModule,
    SharedModule,
  ],
  exports: [
    DropSectionComponent,
    DropSectionFormViewComponent,
    DropSectionListViewComponent,
    FormElementComponent,
  ]
})
export class DropSectionModule { }
