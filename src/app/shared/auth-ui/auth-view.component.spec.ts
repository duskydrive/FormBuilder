import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthViewComponent } from './auth-view.component';
import { MaterialDesignModule } from 'src/app/material-design/material-design.module';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AuthViewComponent', () => {
  let component: AuthViewComponent;
  let fixture: ComponentFixture<AuthViewComponent>;
  let emailInput: HTMLInputElement;
  let passwordInput: HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthViewComponent ],
      imports: [ 
        MaterialDesignModule, 
        ReactiveFormsModule,
        RouterTestingModule,
        BrowserAnimationsModule,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthViewComponent);
    component = fixture.componentInstance;
    emailInput = fixture.debugElement.nativeElement.querySelector('#email');
    passwordInput = fixture.debugElement.nativeElement.querySelector('#password');

    component.formName = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      username: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });

    component.btnText = 'Login';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render username field if it\'s a login page (btnText === "Login")', () => {
    const element: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#usernameField');
    expect(element).toBeNull();
  });

  it('should render username field if it\'s a register page (btnText === "Register")', () => {
    component.btnText = 'Register';
    fixture.detectChanges();
    const element: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#usernameField');
    expect(element).toBeTruthy();
  });
  
  it('should display error if email field has been touched and has empty value', () => {
    emailInput.value = '';
    emailInput.dispatchEvent(new Event('input'));
    component.formName.controls['email'].markAsTouched();
    fixture.detectChanges();
    const element: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#emailRequiredError');
    expect(element).toBeTruthy();
  });

  it('should display error if email field has been touched and has wrong type', () => {
    emailInput.value = 'notanemail';
    emailInput.dispatchEvent(new Event('input'));
    component.formName.controls['email'].markAsTouched();
    fixture.detectChanges();
    const element: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#emailTypeError');
    expect(element).toBeTruthy();
  });
  
  it('should not display error if email field has proper value', () => {
    emailInput.value = 'test@gmail.com';
    emailInput.dispatchEvent(new Event('input'));
    component.formName.controls['email'].markAsTouched();
    fixture.detectChanges();
    const element: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#emailRequiredError');
    expect(element).toBeNull();
  });

  it('should display error if password field has been touched and has empty value', () => {
    passwordInput.value = '';
    passwordInput.dispatchEvent(new Event('input'));
    component.formName.controls['password'].markAsTouched();
    fixture.detectChanges();
    const element: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#passwordRequiredError');
    expect(element).toBeTruthy();
  });

  it('should display error if password field has been touched and has less than 3 characters', () => {
    passwordInput.value = 'ab';
    passwordInput.dispatchEvent(new Event('input'));
    component.formName.controls['password'].markAsTouched();
    fixture.detectChanges();
    const element: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#passwordLengthError');
    expect(element).toBeTruthy();
  });

  it('should not display error if password field has proper value', () => {
    passwordInput.value = '123123';
    passwordInput.dispatchEvent(new Event('input'));
    component.formName.controls['password'].markAsTouched();
    fixture.detectChanges();
    const element: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#passwordRequiredError');
    expect(element).toBeNull();
  });

  it('should display error if username field has been touched and has empty value', () => {
    component.btnText = 'Register';
    fixture.detectChanges();
    const usernameInput: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#username');
    usernameInput.value = '';
    usernameInput.dispatchEvent(new Event('input'));
    component.formName.controls['username'].markAsTouched();
    fixture.detectChanges();
    const element: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#usernameRequiredError');
    expect(element).toBeTruthy();
  });

  it('should not display an error if username field has value', () => {
    component.btnText = 'Register';
    fixture.detectChanges();
    const usernameInput: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#username');
    usernameInput.value = 'Joe';
    usernameInput.dispatchEvent(new Event('input'));
    component.formName.controls['username'].markAsTouched();
    fixture.detectChanges();
    const element: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#usernameRequiredError');
    expect(element).toBeNull();
  });

  it('should have disabled submit btn if form is not filled', () => {
    const submitBtn: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#submitBtn');
    // console.log()
    // component.formName.controls['username'].markAsTouched();
    // fixture.detectChanges();
    // const element: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#usernameRequiredError');
    expect(submitBtn.disabled).toBeTrue();
  });

  it('should have active submit btn if form is filled', () => {
    component.btnText = 'Register';
    fixture.detectChanges();
    const usernameInput: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#username');
    const submitBtn: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#submitBtn');
    emailInput.value = 'test@gmail.com';
    usernameInput.value = 'Joe';
    passwordInput.value = '123123';
    emailInput.dispatchEvent(new Event('input'));
    usernameInput.dispatchEvent(new Event('input'));
    passwordInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(submitBtn.disabled).toBeFalse();
  });
  
});
