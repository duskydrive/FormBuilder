import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGeneralDesignComponent } from './form-general-design.component';

describe('FormGeneralDesignComponent', () => {
  let component: FormGeneralDesignComponent;
  let fixture: ComponentFixture<FormGeneralDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGeneralDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGeneralDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
