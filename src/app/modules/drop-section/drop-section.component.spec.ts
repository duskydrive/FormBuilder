import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MaterialDesignModule } from 'src/app/shared/material-design/material-design.module';

import { DropSectionComponent } from './drop-section.component';

import { Component, Input } from '@angular/core';
describe('DropSectionComponent', () => {
  let component: DropSectionComponent;
  let fixture: ComponentFixture<DropSectionComponent>;

  @Component({
    selector: 'app-form-element',
    template: '<div></div>',
  })
  class MockAppFormElementComponent {}

  @Component({
    selector: 'app-drop-section-list-view',
    template: '<div></div>',
  })
  class MockDropSectionListViewComponent {}

  @Component({
    selector: 'app-drop-section-form-view',
    template: '<div></div>',
  })
  class MockDropSectionFormViewComponent {
    @Input() backgroundColor!: string;
    @Input() borderWidth!: string;
    @Input() borderColor!: string;
    @Input() borderStyle!: string;
    @Input() fontSize!: number;
    @Input() fontWeight!: number;
    @Input() color!: string;
    @Input() heading!: string;
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        DropSectionComponent, 
        MockDropSectionListViewComponent, 
        MockAppFormElementComponent,
        MockDropSectionFormViewComponent,
      ],
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
