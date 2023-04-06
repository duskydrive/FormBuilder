import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DefaultFormElementsService } from '../services/default-form-elements.service';
import { DragSectionListViewComponent } from './drag-section-list-view.component';

describe('DragSectionListViewComponent', () => {
  let component: DragSectionListViewComponent;
  let fixture: ComponentFixture<DragSectionListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragSectionListViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragSectionListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
