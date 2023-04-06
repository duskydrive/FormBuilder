// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';

// import { SelectFieldComponent } from './select-field.component';

// describe('SelectFieldComponent', () => {
//   let component: SelectFieldComponent;
//   let fixture: ComponentFixture<SelectFieldComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ SelectFieldComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(SelectFieldComponent);
//     component = fixture.componentInstance;

//     // values received from parent
//     component.designPlaceholder = '12 placeholder';
//     component.designId = '1111';
//     component.designWidth = 80;
//     component.designHeight = 30;
//     component.designRequired = true;
//     component.designBorderWidth = '12';
//     component.designBorderColor = '#ff0000';
//     component.designBorderStyle = 'dashed';
//     component.designFontSize =  17;
//     component.designFontWeight = 600;
//     component.designColor = '#ff0000';

//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should set placeholder input', () => {
//     expect(fixture.debugElement.query(By.css('#fieldPlaceholder')).nativeElement.value).toEqual('12 placeholder');
//   });

//   it('should set width input', () => {
//     expect(fixture.debugElement.query(By.css('#fieldWidth')).nativeElement.value).toEqual('80');
//   });

//   it('should set height input', () => {
//     expect(fixture.debugElement.query(By.css('#fieldHeight')).nativeElement.value).toEqual('30');
//   });

//   it('should set required input', () => {
//     expect(fixture.debugElement.query(By.css('#fieldRequired')).nativeElement.checked).toBeTrue()
//   });

//   it('should set border width input', () => {
//     expect(fixture.debugElement.query(By.css('#fieldBorderWidth')).nativeElement.value).toEqual('12');
//   });

//   it('should set border color input', () => {
//     expect(fixture.debugElement.query(By.css('#fieldBorderColor')).nativeElement.value).toEqual('#ff0000');
//   });

//   it('should set border style select', () => {
//     expect(fixture.debugElement.query(By.css('#fieldBorderStyle')).nativeElement.value).toEqual('dashed');
//   });

//   it('should set font size input', () => {
//     expect(fixture.debugElement.query(By.css('#fieldFontSize')).nativeElement.value).toEqual('17');
//   });

//   it('should set font weight select', () => {
//     expect(fixture.debugElement.query(By.css('#fieldFontWeight')).nativeElement.value).toEqual('600');
//   });

//   it('should set color input', () => {
//     expect(fixture.debugElement.query(By.css('#fieldColor')).nativeElement.value).toEqual('#ff0000');
//   });

//   it('should fire emit func', () => {
//     const inputVal = fixture.debugElement.query(By.css('#fieldPlaceholder')).nativeElement.value;

//     const event = new KeyboardEvent('keyup',{'bubbles':true});

//     component.triggerChange.subscribe((res) => {
//       expect(res).toEqual({
//         elementId: component.designId, 
//         key: 'placeholderText', 
//         val: inputVal});
//     })

//     fixture.debugElement.query(By.css('#fieldPlaceholder')).nativeElement.dispatchEvent(event);
//   });

//   it('should fire triggerAddOption', () => {
//     const inputVal = fixture.debugElement.query(By.css('#fieldAddOption')).nativeElement.value;
    
//     fixture.debugElement.query(By.css('#btnAddOption')).nativeElement.click();
    
//     component.triggerAddOption.subscribe((res) => {
//       expect(res).toEqual(
//         {selectId: component.designId, value: inputVal}
//       )
//     });
//   });

// });