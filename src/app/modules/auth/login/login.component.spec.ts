import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthService } from '../services/auth.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;
  let authService: AuthService;

  const validUser = {
    email: 'test@gmail.com',
    password: '123123',
  }

  beforeEach(() => {  
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule,
      ],
      providers: [
        LoginComponent,
        AuthService
      ],
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router)
    authService = TestBed.inject(AuthService);
    

  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to main page if login successfull', fakeAsync(() => {
    spyOn(authService, 'login').and.callFake(() => {
      return of(validUser);
    })

    const navigateSpy = spyOn(router, 'navigate');

    component.loginForm.controls['email'].setValue('test@gmail.com')
    component.loginForm.controls['password'].setValue('123123')
    
    component.onSubmit()
    tick()

    expect(navigateSpy).toHaveBeenCalledWith(['']);
    
  }));

  it('authService login() should be called onSubmit', fakeAsync(() => {
    const authServiceSpy = spyOn(authService, 'login').and.callFake(() => {
      return of(validUser);
    })

    component.loginForm.controls['email'].setValue('test@gmail.com')
    component.loginForm.controls['password'].setValue('123123')

    component.onSubmit()
    tick()
    
    expect(authServiceSpy).toHaveBeenCalled();
  }));

})

