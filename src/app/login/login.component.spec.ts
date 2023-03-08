import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from  '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { AuthViewComponent } from '../shared/auth-ui/auth-view.component';
import { MaterialDesignModule } from 'src/app/material-design/material-design.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent, AuthViewComponent ],
      imports: [ 
        MaterialDesignModule, 
        ReactiveFormsModule, 
        AppRoutingModule, 
        BrowserAnimationsModule,
        HttpClientTestingModule,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
