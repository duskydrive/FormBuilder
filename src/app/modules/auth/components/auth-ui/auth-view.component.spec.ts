import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthViewComponent } from './auth-view.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from 'src/app/shared/material-design/material-design.module';
import { By } from '@angular/platform-browser';

describe('AuthViewComponent', () => {
  let component: AuthViewComponent;
  let fixture: ComponentFixture<AuthViewComponent>;

  const loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  const registerForm = new FormGroup({
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthViewComponent ],
      imports: [ 
        ReactiveFormsModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        MaterialDesignModule
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthViewComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render username field if it\'s a login page', () => {
    component.formGroup = loginForm;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#username'))).toBeNull();
  });

  it('should render username field if it\'s a register page', () => {
    component.formGroup = registerForm;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#username'))).toBeTruthy();
  });
  
  it('should display error if email field has been touched and has empty value', () => {
    component.formGroup = loginForm;
    component.formGroup.controls['email'].setValue('')
    component.formGroup.controls['email'].markAsTouched();
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#emailRequiredError'))).toBeTruthy();
  });

  it('should display error if email field has been touched and has wrong type', () => {
    component.formGroup = loginForm;
    component.formGroup.controls['email'].setValue('notanemail')
    component.formGroup.controls['email'].markAsTouched();
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#emailTypeError'))).toBeTruthy();
  });
  
  it('should not display error if email field has proper value', () => {
    component.formGroup = loginForm;
    component.formGroup.controls['email'].setValue('email@gmail.com')
    component.formGroup.controls['email'].markAsTouched();
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#emailTypeError'))).toBeNull();
    expect(fixture.debugElement.query(By.css('#emailRequiredError'))).toBeNull();
  });

  it('should display error if password field has been touched and has empty value', () => {
    component.formGroup = loginForm;
    component.formGroup.controls['password'].setValue('')
    component.formGroup.controls['password'].markAsTouched();
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#passwordRequiredError'))).toBeTruthy();
  });

  it('should display error if password field has been touched and has less than 3 characters', () => {
    component.formGroup = loginForm;
    component.formGroup.controls['password'].setValue('ab')
    component.formGroup.controls['password'].markAsTouched();
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#passwordLengthError'))).toBeTruthy();
  });

  it('should not display error if password field has proper value', () => {
    component.formGroup = loginForm;
    component.formGroup.controls['password'].setValue('123123')
    component.formGroup.controls['password'].markAsTouched();
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#passwordRequiredError'))).toBeNull();
    expect(fixture.debugElement.query(By.css('#passwordLengthError'))).toBeNull();
  });

  it('should display error if username field has been touched and has empty value', () => {
    component.formGroup = registerForm;
    component.formGroup.controls['username'].setValue('')
    component.formGroup.controls['username'].markAsTouched();
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#usernameRequiredError'))).toBeTruthy();
  });

  it('should not display an error if username field has value', () => {
    component.formGroup = registerForm;
    component.formGroup.controls['username'].setValue('Joe')
    component.formGroup.controls['username'].markAsTouched();
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#usernameRequiredError'))).toBeNull();

  });

  it('should have disabled submit btn if form is not filled', () => {
    component.formGroup = loginForm;
    component.formGroup.controls['email'].setValue('')
    component.formGroup.controls['password'].setValue('')
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#submitBtn')).nativeElement.disabled).toBeTrue();
  });

  it('should have active submit btn if form is filled', () => {
    component.formGroup = registerForm;
    component.formGroup.controls['email'].setValue('test@gmail.com')
    component.formGroup.controls['username'].setValue('Joe')
    component.formGroup.controls['password'].setValue('123123')
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#submitBtn')).nativeElement.disabled).toBeFalse();
  });
  
});
