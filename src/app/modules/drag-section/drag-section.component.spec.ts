import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MaterialDesignModule } from 'src/app/shared/material-design/material-design.module';

import { DragSectionComponent } from './drag-section.component';
import { DragSectionListViewComponent } from './drag-section-list-view/drag-section-list-view.component';

describe('DragSectionComponent', () => {
  let component: DragSectionComponent;
  let fixture: ComponentFixture<DragSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragSectionComponent, DragSectionListViewComponent ],
      imports: [ MaterialDesignModule ],
      providers: [ provideMockStore({}) ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
