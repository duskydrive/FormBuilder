import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormElementComponent } from './form-element.component';

describe('FormElementComponent', () => {
  let component: FormElementComponent;
  let fixture: ComponentFixture<FormElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.element = {
      id: '',
      type: 'input',
      placeholderText: 'Input placeholder',
      width: 100,
      height: 50,
      required: false,
      borderWidth: '1',
      borderColor: '#cccccc',
      borderStyle: 'solid', 
      fontSize: 14,
      fontWeight: 400,
      color: '#000000',
    }
    expect(component).toBeTruthy();
  });
});
