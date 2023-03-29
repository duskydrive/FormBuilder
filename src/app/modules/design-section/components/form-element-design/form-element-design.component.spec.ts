import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormElementDesignComponent } from './form-element-design.component';

describe('FormElementDesignComponent', () => {
  let component: FormElementDesignComponent;
  let fixture: ComponentFixture<FormElementDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormElementDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormElementDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
