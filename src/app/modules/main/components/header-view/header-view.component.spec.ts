import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialDesignModule } from 'src/app/shared/material-design/material-design.module';

import { HeaderViewComponent } from './header-view.component';

describe('HeaderViewComponent', () => {
  let component: HeaderViewComponent;
  let fixture: ComponentFixture<HeaderViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderViewComponent ],
      imports: [ MaterialDesignModule ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
