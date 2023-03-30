import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MaterialDesignModule } from 'src/app/shared/material-design/material-design.module';

import { DropSectionFormViewComponent } from './drop-section-form-view.component';
import { DropSectionListViewComponent } from '../drop-section-list-view/drop-section-list-view.component';

describe('DropSectionFormViewComponent', () => {
  let component: DropSectionFormViewComponent;
  let fixture: ComponentFixture<DropSectionFormViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropSectionFormViewComponent, DropSectionListViewComponent ],
      imports: [ MaterialDesignModule ],
      providers: [ provideMockStore({}) ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropSectionFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
