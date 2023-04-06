import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MaterialDesignModule } from 'src/app/shared/material-design/material-design.module';

import { MainComponent } from './main.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderViewComponent } from './components/header-view/header-view.component';
import { DesignSectionComponent } from '../design-section/design-section.component';
import { DropSectionComponent } from '../drop-section/drop-section.component';
import { DragSectionComponent } from '../drag-section/drag-section.component';
import { FormGeneralDesignComponent } from '../design-section/components/form-general-design/form-general-design.component';
import { FormElementDesignComponent } from '../design-section/components/form-element-design/form-element-design.component';
import { DragSectionListViewComponent } from '../drag-section/drag-section-list-view/drag-section-list-view.component';


describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        MainComponent, 
        HeaderComponent,
        HeaderViewComponent,
        DesignSectionComponent,
        DropSectionComponent,
        DragSectionComponent,
        FormGeneralDesignComponent,
        FormElementDesignComponent,
        DragSectionListViewComponent,
      ],
      imports: [ HttpClientTestingModule, MaterialDesignModule ],
      providers: [ provideMockStore({}) ],
    })
    .overrideComponent(FormGeneralDesignComponent, {
      set: {
        selector: 'app-form-general-design-view',
        template: `<h1>Form General Design</h1>`
      }
    })
    .overrideComponent(DesignSectionComponent, {
      set: {
        selector: 'app-design-section',
        template: `<h1>Design Section</h1>`
      }
    })
    .overrideComponent(DropSectionComponent, {
      set: {
        selector: 'app-drop-section',
        template: `<h1>Drop Section</h1>`
      }
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
