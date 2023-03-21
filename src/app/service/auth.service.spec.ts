import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { waitForAsync, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let mockAuthService: jasmine.SpyObj<AuthService>;
  let router: Router;
  const mockResponse = {
    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6I…zMifQ.fj_HYefNPogOio9yIV0I7g0aD-xMFyhVjp96b6Nx1_0', 
    user: {
      email: "test@gmail.com",
      id: "4_0iTK3",
    }
  };
  
  beforeEach(async () => {
    mockAuthService = jasmine.createSpyObj<AuthService>('AuthService', ['login', 'register']);
    mockAuthService.login.and.returnValue(of([mockResponse]));

    await TestBed.configureTestingModule({
      providers: [{provide: AuthService, useValue: mockAuthService}]
    });
    // .compileComponents();
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created 123', () => {
    console.log(service.login({ email: 'test@gmail.com', password: '123123'}))
    expect(service.login({ email: 'test@gmail.com', password: '123123'})).toBeTruthy();
  });

  // it('should navigate on submit', async () => {
    // console.log(service)
    // set these values so the form is valid and the method does not return early
    // component.form['email'].setValue('test@test.com');
    // component.form['password'].setValue('1234567');
    // for our testing we don't care what it returns, as long as it is a promise
    // console.log(mockAuthService.login(obj))
    // mockAuthService.login(obj).subscribe((res) => {
      //   console.log(res)
      // })
      // component.submit();
      // wait for all pending promises to resolve
      // await fixture.whenStable();
      // expect(router.navigate).toHaveBeenCalledWith(['/]);
    // });
    // });

    // it('retrieves all the cars', waitForAsync(inject([mockAuthService], (mockAuthService: any) => {
    //   const obj = {
    //     email: 'test@gmail.com',
    //     password: '123123',
    //   }
    //   // mockAuthService.login(obj).subscribe((result: any) => expect(result.length).toBeGreaterThan(0)); 
    //   mockAuthService.login(obj).subscribe((result: any) => console.log(result)); 
    // })));

  });