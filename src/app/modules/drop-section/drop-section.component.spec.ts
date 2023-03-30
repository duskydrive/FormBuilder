import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MaterialDesignModule } from 'src/app/shared/material-design/material-design.module';

import { DropSectionComponent } from './drop-section.component';

describe('DropSectionComponent', () => {
  let component: DropSectionComponent;
  let fixture: ComponentFixture<DropSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropSectionComponent ],
      imports: [ MaterialDesignModule ],
      providers: [ provideMockStore({}) ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
