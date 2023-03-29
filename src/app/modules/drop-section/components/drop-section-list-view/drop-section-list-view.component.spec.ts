import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropSectionListViewComponent } from './drop-section-list-view.component';

describe('DropSectionListViewComponent', () => {
  let component: DropSectionListViewComponent;
  let fixture: ComponentFixture<DropSectionListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropSectionListViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropSectionListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
