import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementFieldsComponent } from './element-fields.component';

describe('ElementFieldsComponent', () => {
  let component: ElementFieldsComponent;
  let fixture: ComponentFixture<ElementFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementFieldsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
