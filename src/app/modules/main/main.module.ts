import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from 'src/app/shared/material-design/material-design.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { MainComponent } from './main.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderViewComponent } from './components/header-view/header-view.component';

@NgModule({
  declarations: [
    // MainComponent,
    // HeaderComponent,
    // HeaderViewComponent,
  ],
  imports: [
    CommonModule,
    MaterialDesignModule,
    StoreModule,
    StoreDevtoolsModule,
  ],
  exports: [
    // MainComponent,
    // HeaderComponent,
    // HeaderViewComponent,
  ]
})
export class MainModule { }
