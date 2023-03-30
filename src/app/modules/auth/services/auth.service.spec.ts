// import { TestBed } from '@angular/core/testing';
// import { Router } from '@angular/router';
// import { waitForAsync, inject } from '@angular/core/testing';
// import { AuthService } from './auth.service';
// import { of } from 'rxjs';

// describe('AuthService', () => {
//   let service: AuthService;
//   let mockAuthService: jasmine.SpyObj<AuthService>;
//   let router: Router;
  // const mockResponse = {
  //   accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6I…zMifQ.fj_HYefNPogOio9yIV0I7g0aD-xMFyhVjp96b6Nx1_0', 
  //   user: {
  //     email: "test@gmail.com",
  //     id: "4_0iTK3",
  //   }
  // };
  
//   beforeEach(async () => {
//     mockAuthService = jasmine.createSpyObj<AuthService>('AuthService', ['login', 'register']);
//     mockAuthService.login.and.returnValue(of([mockResponse]));

//     await TestBed.configureTestingModule({
//       providers: [{provide: AuthService, useValue: mockAuthService}]
//     });
//     // .compileComponents();
//     service = TestBed.inject(AuthService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });

//   it('should be created 123', () => {
//     console.log('777')
//     service.login({ email: 'test@gmail.com1', password: '123123'}).subscribe((res) => {
//       console.log(res)
//     })
//     expect(service.login({ email: 'test@gmail.com', password: '123123'})).toBeTruthy();
//   });


//   });

// *********** THIS KINDA WORKS *************

import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

describe('AuthService', () => {
  let service: AuthService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  const mockResponse = {
    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6I…zMifQ.fj_HYefNPogOio9yIV0I7g0aD-xMFyhVjp96b6Nx1_0', 
    user: {
      email: "test@gmail.com",
      id: "4_0iTK3",
    }
  };
  
  beforeEach(async () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    
    TestBed.configureTestingModule({
      providers: [{provide: HttpClient, useValue: httpClientSpy}],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created 123', () => {    
    httpClientSpy.post.and.returnValue(of(mockResponse));
    service.login({ email: 'test@gmail.com', password: '123123'}).subscribe({
      next: (res) => {
        expect(res).toEqual(mockResponse);
        
      }
    });
    expect(httpClientSpy.post).toHaveBeenCalledTimes(1);
  });
});

// *********** 
// *********** 
// ***********


// import { TestBed } from '@angular/core/testing';
// import { AuthService } from './auth.service';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


// describe('AuthService', () => {
//   let service: AuthService;
//   let testingController: HttpTestingController;
//   const mockResponse = {
//     accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6I…zMifQ.fj_HYefNPogOio9yIV0I7g0aD-xMFyhVjp96b6Nx1_0', 
//     user: {
//       email: "test@gmail.com",
//       id: "4_0iTK3",
//     }
//   };
  
//   beforeEach(async () => {
    
//     TestBed.configureTestingModule({
//       providers: [ AuthService ],
//       imports: [ HttpClientTestingModule ],
//     });
//     service = TestBed.inject(AuthService);
//     testingController = TestBed.inject(HttpTestingController);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });

//   it('should be a POST request', () => {  
//     const userCred = { email: 'test@gmail.com', password: '123123'};  
//     const userCredStr = "{ email: 'test@gmail.com', password: '123123'}";  
//     // const loginRequest = httpMock.expectOne(`${service.apiUrl}users`);
//     // expect(loginRequest.request.method).toBe('POST');
//     service.login(userCred).subscribe((res) => {
//       return 1
//     })
//     const mockReq = testingController.expectOne(`${service.apiUrl}login`, userCredStr)
//   });
// });