import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGeneralDesignViewComponent } from './form-general-design-view.component';

describe('FormGeneralDesignViewComponent', () => {
  let component: FormGeneralDesignViewComponent;
  let fixture: ComponentFixture<FormGeneralDesignViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGeneralDesignViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGeneralDesignViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
