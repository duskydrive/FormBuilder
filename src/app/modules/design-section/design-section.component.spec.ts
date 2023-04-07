import { 
  ComponentFixture, TestBed, 
} from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MaterialDesignModule } from 'src/app/shared/material-design/material-design.module';

import { DesignSectionComponent } from './design-section.component';
import { FormElementDesignComponent } from './components/form-element-design/form-element-design.component';
import { AccordionManipulatorService } from 'src/app/shared/service/accordion-manipulator.service';
import { Subject } from 'rxjs';
import { Component } from '@angular/core';
 
describe('DesignSectionComponent', () => {
  let component: DesignSectionComponent;
  let fixture: ComponentFixture<DesignSectionComponent>;
  const accordionServiceSpy = { callToggle: new Subject()};
  let spy: AccordionManipulatorService;
  
  const convertToBool = (str: string | undefined | null) => {
    if (str === undefined) {
      return undefined
    } else if (str === null) {
      return null
    } else if (str === 'true') {
      return true
    } else {
      return false
    }
  }

  @Component({
    selector: 'app-form-general-design',
    template: '<div></div>',
  })
  class MockFormGeneralDesignComponent {}

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DesignSectionComponent,
        MockFormGeneralDesignComponent,
        FormElementDesignComponent,
      ],
      imports: [
        MaterialDesignModule,
      ],
      providers: [ 
        provideMockStore({}),
        { provide: AccordionManipulatorService, useValue: accordionServiceSpy }
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesignSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spy = TestBed.inject(AccordionManipulatorService);
  }));
 

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('accordion field styling tab should be closed', () => {
    expect(convertToBool(component.fieldsTab?.getAttribute('aria-expanded'))).toBeFalse();
  });

  it('should toggle accordion with openFieldStyling()', () => {
    component.openFieldStyling()
    fixture.detectChanges();
    expect(convertToBool(component.fieldsTab?.getAttribute('aria-expanded'))).toBeTruthy();
  });

  it('should open second tab when fieldsTabClickable is clicked', () => {
    component.fieldsTabClickable?.click()
    fixture.detectChanges();
    expect(convertToBool(component.fieldsTab?.getAttribute('aria-expanded'))).toBeTruthy();
  });

  it('should run openFieldStyling when accordionService toggles', (() => {
    spyOn(component, 'openFieldStyling').and.callFake(() => {
      return '';
    })
    spy.callToggle.next(true);
    expect(component.openFieldStyling).toHaveBeenCalled();
  }));
});
