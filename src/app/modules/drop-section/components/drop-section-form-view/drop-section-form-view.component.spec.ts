import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropSectionFormViewComponent } from './drop-section-form-view.component';

describe('DropSectionFormViewComponent', () => {
  let component: DropSectionFormViewComponent;
  let fixture: ComponentFixture<DropSectionFormViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropSectionFormViewComponent ]
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
