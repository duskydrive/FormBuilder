import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from  '@angular/common/http/testing';
import { MaterialDesignModule } from 'src/app/material-design/material-design.module';
import { AuthViewComponent } from '../shared/auth-ui/auth-view.component';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent, AuthViewComponent ],
      imports: [ HttpClientTestingModule, MaterialDesignModule, ReactiveFormsModule, AppRoutingModule, BrowserAnimationsModule ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
