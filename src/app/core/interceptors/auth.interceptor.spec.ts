// // import {TestBed, inject} from '@angular/core/testing';
// // import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
// // import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
// // import { AuthInterceptor } from './auth.interceptor';
// // import { AuthService } from 'src/app/modules/auth/services/auth.service';
// // import { Router } from '@angular/router';

// // describe('AuthInterceptor', () => {
// //   const mockAuthService: AuthService = jasmine.createSpyObj('AuthService',
// //   ['login']);
// //   let router: Router;
// //   let spy: AuthService;

// //   beforeEach(() => {
// //     TestBed.configureTestingModule({
// //       providers: [
// //         AuthInterceptor,
// //         {
// //           provide: AuthService,
// //           useValue: mockAuthService,
// //         },
// //         {
// //           provide: HTTP_INTERCEPTORS,
// //           useClass: AuthInterceptor,
// //           multi: true
// //         }
// //       ],
// //       imports: [HttpClientTestingModule],
// //     })
// //     spy = TestBed.inject(AuthService);
// //   });

// //   it('should be created', () => {
// //     const interceptor: AuthInterceptor = TestBed.inject(AuthInterceptor);
// //     expect(interceptor).toBeTruthy();
// //   });

// //   describe('intercept HTTP requests', () => {
// //     it('should add Accept-Language to Headers', inject([HttpClient, HttpTestingController],
// //       (http: HttpClient, mock: HttpTestingController) => {

// //           //  http.post('http://localhost:3000/login', {email: 'test@gmail.com', password: '123123'}).subscribe(response => expect(response).toBeTruthy());
// //           //  const request = mock.expectOne(req => (req.headers.has('Accept-Language') && req.headers.get('Accept-Language') === 'ar'));

// //           //  request.flush({data: 'test'});
// //           //  mock.verify();
// //           // mockAuthService.login()
// //           const req = mock.expectOne('http://localhost:3000/login');
// //           expect(req.request.method).toEqual('POST');
// //      }));
// //     });

// //     afterEach(inject([HttpTestingController], (mock: HttpTestingController) => {
// //         mock.verify();
// //     }));

// // });
// import { HttpClient, HttpClientModule, HttpHeaders, HttpRequest } from '@angular/common/http';
// import {
//   HttpClientTestingModule,
//   HttpTestingController,
//   TestRequest,
// } from '@angular/common/http/testing';
// import { TestBed, waitForAsync } from '@angular/core/testing';

// describe('headers test', () => {

//   beforeEach(
//     waitForAsync(() => {
//       void TestBed.configureTestingModule({
//         imports: [HttpClientTestingModule, HttpClientModule],
        
//       })
//     }),
//   );

//   it('should have my header', () => {
//     const url = 'http://localhost:3000/login'
//     fetch(url, {
//       credentials: 'include',
//       method: 'post',
//       // headers: {
//         // "Content-Type": "application/json; charset=utf-8",
//       // },
//       body: JSON.stringify({
//         email: 'test@gmail.com',
//         password: '123123',
//       }),
//     })
//     .then(response => response.json())
//     .then(function(response) {
//       // How to access response headers here?
//       console.log(response.headers.get("content-type"))
//     });


//   });

//   // afterEach(() => {
//   //   httpTestingController
//   //     .match((req: HttpRequest<unknown>): boolean => true)
//   //     .forEach((req: TestRequest) => (!req.cancelled ? req.flush({}) : null));
//   //   httpTestingController.verify();
//   // });

//   // it('should have my header', () => {
//   //   const headers = new HttpHeaders().set('Custom-Header', 'test');
//   //   void httpClient.post('login', { headers }).subscribe();
//   //   const req = httpTestingController.match('login');
//   //   console.warn('req', req);
//   //   console.warn(req[0].request.headers);
//   //   expect(req[0].request.headers.has('Content-type')).toEqual(true);
//   // });
// });