import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

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
    // values from parent
    component.elementId = '1111';
    component.elementType = 'input';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fire triggerRemoveElement', () => {
    fixture.debugElement.query(By.css('#removeElement')).nativeElement.click();
      
    component.triggerRemoveElement.subscribe((res) => {
      expect(res).toEqual(component.elementId)
    });    
  });

});
