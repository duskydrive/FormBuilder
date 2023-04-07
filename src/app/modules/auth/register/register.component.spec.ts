import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { AuthService } from '../services/auth.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let router: Router;
  let authService: AuthService;

  const validUser = {
    email: 'test@gmail.com',
    username: 'Joe',
    password: '123123',
  }

  beforeEach(() => {  
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(
          [{path: 'login', redirectTo: ''}]
        ),
        HttpClientTestingModule,
      ],
      providers: [
        RegisterComponent,
        AuthService
      ],
    });

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router)
    authService = TestBed.inject(AuthService);

  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to login page if register successfull', fakeAsync(() => {
    spyOn(authService, 'register').and.callFake(() => {
      return of(validUser);
    })

    const navigateSpy = spyOn(router, 'navigate');

    component.regForm.controls['email'].setValue('test@gmail.com')
    component.regForm.controls['username'].setValue('Joe')
    component.regForm.controls['password'].setValue('123123')
    
    component.onSubmit()
    tick()

    expect(navigateSpy).toHaveBeenCalledWith([ 'login' ]);
    
  }));

  it('authService register() should be called onSubmit', fakeAsync(() => {
    const authServiceSpy = spyOn(authService, 'register').and.callFake(() => {
      return of(validUser);
    })

    component.regForm.controls['email'].setValue('test@gmail.com')
    component.regForm.controls['username'].setValue('Joe')
    component.regForm.controls['password'].setValue('123123')

    component.onSubmit()
    tick()
    
    expect(authServiceSpy).toHaveBeenCalled();
  }));

})

