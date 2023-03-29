import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveElementButtonComponent } from './remove-element-button.component';

describe('RemoveElementButtonComponent', () => {
  let component: RemoveElementButtonComponent;
  let fixture: ComponentFixture<RemoveElementButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveElementButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveElementButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
