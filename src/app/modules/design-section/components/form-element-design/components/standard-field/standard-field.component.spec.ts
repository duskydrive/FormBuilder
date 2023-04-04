import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
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

  // it('should set placeholder input', () => {
  //   component.designPlaceholder = '12 placeholder';
  //   fixture.debugElement.query(By.css('#fieldPlaceholder')).nativeElement.dispatchEvent(new Event('input'));
  //   fixture.detectChanges();
  //   console.log(66666)
  //   console.log(component.designPlaceholder)
  //   console.log(777)
  //   console.log(fixture.debugElement.query(By.css('#fieldPlaceholder')).nativeElement)
  //   expect(fixture.debugElement.query(By.css('#fieldPlaceholder')).nativeElement.value).toEqual('New placeholder');
  // });

  // it('should set width input', () => {
  //   component.designWidth = 12;
  //   fixture.detectChanges();
  //   expect(fixture.debugElement.query(By.css('#fieldWidth')).nativeElement.value).toEqual('12');
  // });

  // it('should set border color input', () => {
  //   component.designBorderColor = '#ff0000';
  //   fixture.detectChanges();
  //   expect(fixture.debugElement.query(By.css('#generalDesignBorderColor')).nativeElement.value).toEqual('#ff0000');
  // });

  // it('should set border style select', () => {
  //   component.designBorderStyle = 'groove';
  //   fixture.detectChanges();
  //   expect(fixture.debugElement.query(By.css('#generalDesignBorderStyle')).nativeElement.value).toEqual('groove');
  // });

  // it('should set font size input', () => {
  //   component.designFontSize = 12;
  //   fixture.detectChanges();
  //   expect(fixture.debugElement.query(By.css('#generalDesignFontSize')).nativeElement.value).toEqual('12');
  // });

  // it('should set font weight select', () => {
  //   component.designFontWeight = 600;
  //   fixture.detectChanges();
  //   expect(fixture.debugElement.query(By.css('#generalDesignFontWeight')).nativeElement.value).toEqual('600');
  // });

  // it('should set color input', () => {
  //   component.designColor = '#ff0000';
  //   fixture.detectChanges();
  //   expect(fixture.debugElement.query(By.css('#generalDesignColor')).nativeElement.value).toEqual('#ff0000');
  // });

  // it('should set bg color input', () => {
  //   component.designBackgroundColor = '#ff0000';
  //   fixture.detectChanges();
  //   expect(fixture.debugElement.query(By.css('#generalDesignBackgroundColor')).nativeElement.value).toEqual('#ff0000');
  // });

  // it('should fire emit func', () => {
  //   fixture.debugElement.query(By.css('#generalDesignHeading')).nativeElement.value = 'test';

  //   const event = new KeyboardEvent('keyup',{'bubbles':true});

  //   component.triggerChange.subscribe((res) => {
  //     expect(res).toEqual({key: 'heading', val: 'test'});
  //   })

  //   fixture.debugElement.query(By.css('#generalDesignHeading')).nativeElement.dispatchEvent(event);
  // });
});
