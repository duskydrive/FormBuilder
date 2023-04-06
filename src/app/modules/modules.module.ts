import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from 'src/app/shared/material-design/material-design.module';

import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/components/header/header.component';
import { HeaderViewComponent } from './main/components/header-view/header-view.component';

import { AuthModule } from './auth/auth.module';
import { DesignSectionModule } from './design-section/design-section.module';
import { DragSectionModule } from './drag-section/drag-section.module';
import { DropSectionModule } from './drop-section/drop-section.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    HeaderViewComponent,
  ],
  imports: [
    CommonModule,
    MaterialDesignModule,
    AuthModule,
    DesignSectionModule,
    DragSectionModule,
    DropSectionModule,
    SharedModule,
  ],
  exports: [
    MainComponent,
    HeaderComponent,
    HeaderViewComponent,
  ]
})
export class ModulesModule { }
