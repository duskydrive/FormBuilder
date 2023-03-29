import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardFieldComponent } from './standard-field.component';

describe('StandardFieldComponent', () => {
  let component: StandardFieldComponent;
  let fixture: ComponentFixture<StandardFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandardFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
