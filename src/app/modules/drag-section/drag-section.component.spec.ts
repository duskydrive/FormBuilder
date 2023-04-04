import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

import { provideMockStore } from '@ngrx/store/testing';
import { MaterialDesignModule } from 'src/app/shared/material-design/material-design.module';
import { DragdropService } from 'src/app/shared/service/dragdrop.service';
import { DragSectionComponent } from './drag-section.component';
import { DragSectionListViewComponent } from './drag-section-list-view/drag-section-list-view.component';
import { FormElement } from 'src/app/shared/service/interfaces';
import { Observable } from 'rxjs';

describe('DragSectionComponent', () => {
  let component: DragSectionComponent;
  let fixture: ComponentFixture<DragSectionComponent>;
  let dragdropService: DragdropService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragSectionComponent, DragSectionListViewComponent ],
      imports: [ MaterialDesignModule ],
      providers: [ 
        provideMockStore({}),
        // {
        //   provide: DragdropService,
        //   useValue: jasmine.createSpyObj('DragdropService', ['drop'])
      //  }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dragdropService = TestBed.inject(DragdropService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger dragService.drop()', () => {
    const dragServiceSpy = spyOn(dragdropService, 'drop').and.callFake(() => {return true})

    const fakeEvent = true as unknown as CdkDragDrop<Observable<FormElement[]>>

    component.onDrop(fakeEvent);

    expect(dragServiceSpy).toHaveBeenCalled();
  });
});
