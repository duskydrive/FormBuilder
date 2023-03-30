import { 
  ComponentFixture, 
  TestBed 
} from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MaterialDesignModule } from 'src/app/shared/material-design/material-design.module';

import { DesignSectionComponent } from './design-section.component';
import { FormGeneralDesignComponent } from './components/form-general-design/form-general-design.component';
import { FormElementDesignComponent } from './components/form-element-design/form-element-design.component';
import { AccordionManipulatorService } from 'src/app/shared/service/accordion-manipulator.service';
import { of } from 'rxjs';
 
describe('DesignSectionComponent', () => {
  let component: DesignSectionComponent;
  let fixture: ComponentFixture<DesignSectionComponent>;
  // let accordionService: AccordionManipulatorService;
  // const accordionServiceSpy = jasmine.createSpyObj('AccordionManipulatorService', ['callToggle']);

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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        DesignSectionComponent,
        FormGeneralDesignComponent,
        FormElementDesignComponent,
      ],
      imports: [
        MaterialDesignModule,
      ],
      providers: [ provideMockStore({})
        // { provide: AccordionManipulatorService, useValue: accordionServiceSpy }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

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

  // it('should receive an id from accordionService', () => {
    // console.log(convertToBool(component.fieldsTab?.getAttribute('aria-expanded')))
    // component.toggleAccordion.callToggle.next( true );
    // spyOn(app, "calculate").and.returnValue(1000);
    // accordionServiceSpy.callToggle.and.returnValue(of(true)).subscribe((res:any) => {
      // console.log('res')
      // console.log(res)
    // })
    // fixture.detectChanges();
    // console.log(convertToBool(component.fieldsTab?.getAttribute('aria-expanded')))
  // });
});
