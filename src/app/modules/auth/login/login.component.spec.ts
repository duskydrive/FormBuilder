// import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
// import { LoginComponent } from './login.component';
// import { ReactiveFormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { RouterTestingModule } from '@angular/router/testing';
// import { AuthService } from '../services/auth.service';
// import { of } from 'rxjs';
// import { MaterialDesignModule } from 'src/app/shared/material-design/material-design.module';

// import { AuthViewComponent } from '../components/auth-ui/auth-view.component';
// import { Router } from '@angular/router';

// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;
//   let authSpy;
//   let router: Router;
//   const authServiceSpy = jasmine.createSpyObj('AuthService', ['login']);
//   const validUser = {
//     email: 'test@gmail.com',
//     password: '123123',
//   }
//   const mockResponse = {
//     accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6I…zMifQ.fj_HYefNPogOio9yIV0I7g0aD-xMFyhVjp96b6Nx1_0', 
//     user: {
//       email: "test@gmail.com",
//       id: "4_0iTK3",
//     }
//   };
//   function updateForm(userEmail: string, userPassword: string) {
//     fixture.componentInstance.loginForm.controls['email'].setValue(userEmail);
//     fixture.componentInstance.loginForm.controls['password'].setValue(userPassword);
//   }

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ LoginComponent, AuthViewComponent ],
//       imports: [ 
//         ReactiveFormsModule, 
//         RouterTestingModule,
//         BrowserAnimationsModule,
//         MaterialDesignModule,
//         RouterTestingModule.withRoutes([]),
//       ],
//       providers: [
//         {provide: AuthService, useValue: authServiceSpy},
//         // { provide: RouterTestingModule, useValue: routerSpy },
//       ],
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//     router = TestBed.inject(Router);
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('authService login() should be called onSubmit', fakeAsync(() => {
//     updateForm(validUser.email, validUser.password);
//     fixture.detectChanges();
//     const button = fixture.debugElement.nativeElement.querySelector('button');
//     button.click();
//     fixture.detectChanges();

//     expect(authServiceSpy.login).toHaveBeenCalled();
//   }));

//   // it('should route to home if login successfully', fakeAsync(() => {
//   //   updateForm(validUser.email, validUser.password);
//   //   fixture.detectChanges();
//   //   const button = fixture.debugElement.nativeElement.querySelector('button');
//   //   button.click();
//   //   advance(fixture);
    
//   //   // console.log(authServiceSpy.login.and.returnValue(of(mockResponse))())
//   //   authSpy = authServiceSpy.login.and.returnValue(of(mockResponse));
    
//   //   // authSpy.subscribe((res: any) => {
      
//   //     // })
//   //     advance(fixture);
      
//   //     // component.exitApp();
//   //     // const navigateSpy = spyOn(router, 'navigate');
//   //   // expect(navigateSpy).toHaveBeenCalledWith(['']);
    
//   //   // console.log('!')
//   //   // console.log(routerSpy)

//   //   // expect(routerSpy).toHaveBeenCalledWith(['']);
//   //   // const navArgs = routerSpy.navigate.calls.first().args[0];
//   //   // const navArgs = routerSpy.calls.first().args[0]; // get the spy values
//   //   // expect(navArgs[0]).toBe('');
//   // }));
//   // function advance(f: ComponentFixture<any>) {
//   //   tick();
//   //   f.detectChanges();
//   // }
// });
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthService } from '../services/auth.service';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  const stubValue = {
    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6I…zMifQ.fj_HYefNPogOio9yIV0I7g0aD-xMFyhVjp96b6Nx1_0', 
    user: {
      email: "test@gmail.com",
      id: "4_0iTK3",
    }
  }

  const validUser = {
    email: 'test@gmail.com',
    password: '123123',
  }

  beforeEach(() => {
    const spy = jasmine.createSpyObj('AuthService', ['login']);
  
    TestBed.configureTestingModule({
      providers: [
        LoginComponent,
        { provide: AuthService, useValue: spy }
      ]
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;

  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be whatever', () => {
    // authServiceSpy.login.withArgs(validUser).and.returnValue(of(stubValue));
    authServiceSpy.login.and.returnValue(of(stubValue));

    component.loginForm.controls['email'].setValue('test@gmail.com')
    component.loginForm.controls['password'].setValue('123123')
    
    component.onSubmit()

    setTimeout(() => {
      console.log('after submit')
      
    }, 1000)
    // expect(component.onSubmit())
    // .withContext('service returned stub value')
    // .toBe(stubValue);
    // localStorage.removeItem('jwt_auth_token')
    // console.log('after remove item:')
    // console.log(localStorage.getItem('jwt_auth_token'))
    // console.log(component.onSubmit())
    // setTimeout(() => {
      // console.log('after submit')
      // console.log(localStorage.getItem('jwt_auth_token'))
    // }, 1000)
  });

})

