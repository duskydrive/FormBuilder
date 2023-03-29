import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from 'src/app/shared/material-design/material-design.module';

import { DragSectionComponent } from './drag-section.component';
import { DragSectionListViewComponent } from './drag-section-list-view/drag-section-list-view.component';

@NgModule({
  declarations: [
    DragSectionComponent,
    DragSectionListViewComponent,
  ],
  imports: [
    CommonModule,
    MaterialDesignModule,
  ],
  exports: [
    DragSectionComponent,
    DragSectionListViewComponent,
  ]
})
export class DragSectionModule { }
