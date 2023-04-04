import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('Auth Guard', () => {
  let authGuard: AuthGuard;
  const authenticationMock: AuthService = jasmine.createSpyObj('AuthService',
  ['isLoggedIn$']);
  let router: Router;
  let spy: AuthService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {path: 'login', redirectTo: ''}
        ]),
      ],
      providers: [
        {provide: AuthService, useValue: authenticationMock}
      ],
    });

    authGuard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router)
    spy = TestBed.inject(AuthService);
  })
  
  it('should be created', () => {
    expect(authGuard).toBeTruthy();
  });

  it('should navigate to login page if user not logged in', fakeAsync(() => {      
    const navigateSpy = spyOn(router, 'navigate');
    spy.isLoggedIn$ = of(false);
    authGuard.canActivate().subscribe(() => {
      tick()
      expect(navigateSpy).toHaveBeenCalledWith(['login']);
    })
  }));

  it('should receive true if user is logged in', fakeAsync(() => {      
    spy.isLoggedIn$ = of(true);
    authGuard.canActivate().subscribe((res: boolean) => {
      expect(res).toBe(true);
    })
  }));

  it('should receive false if user is logged in', fakeAsync(() => {      
    spy.isLoggedIn$ = of(false);
    authGuard.canActivate().subscribe((res: boolean) => {
      expect(res).toBe(false);
    })
  }));

});
