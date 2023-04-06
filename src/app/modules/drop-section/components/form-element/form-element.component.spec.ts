import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { AccordionManipulatorService } from 'src/app/shared/service/accordion-manipulator.service';
import { SendElementIdService } from 'src/app/shared/service/send-element-id.service';

import { FormElementComponent } from './form-element.component';

describe('FormElementComponent', () => {
  let component: FormElementComponent;
  let fixture: ComponentFixture<FormElementComponent>;
  let sendIdService: jasmine.SpyObj<SendElementIdService>;

  beforeEach(async () => {
    sendIdService = jasmine.createSpyObj<SendElementIdService>('SendElementIdService', ['passId']);
    await TestBed.configureTestingModule({
      declarations: [ FormElementComponent ],
      providers: [
        { provide: SendElementIdService, useValue: sendIdService },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger callToggle and sendId with selectElement()', () => {
    const fakeEvent = true as unknown as MouseEvent;
    
    component.element = {
      id: 'id123',
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
    };

    fixture.detectChanges();
    
    component.selectElement(fakeEvent);
    
    expect(sendIdService.passId).toHaveBeenCalled();
  });
});
