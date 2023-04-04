import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/shared/state/app.state';
import { selectGeneralForm } from 'src/app/shared/state/formbuilder/formBuilder.selectors';
import { FormGeneralDesignViewComponent } from './form-general-design-view/form-general-design-view.component';

import { FormGeneralDesignComponent } from './form-general-design.component';
import { updateGeneralForm } from 'src/app/shared/state/formbuilder/formbuilder.actions';

describe('FormGeneralDesignComponent', () => {
  let component: FormGeneralDesignComponent;
  let fixture: ComponentFixture<FormGeneralDesignComponent>;
  let store: MockStore<AppState>;
  const initialState = {};
  let mockFormStylesSelector;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        FormGeneralDesignComponent,
        FormGeneralDesignViewComponent,
      ],
      providers: [provideMockStore({initialState})],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGeneralDesignComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    
    mockFormStylesSelector = store.overrideSelector(
      selectGeneralForm, 
      {
        heading: 'Form Builder',
        borderWidth: '1',
        borderColor: '#cccccc',
        borderStyle: 'solid', 
        fontSize: 20,
        fontWeight: 500,
        color: '#000000',
        backgroundColor: '#ffffff',
      }
    );
    
    fixture.detectChanges();
    store.refreshState();
    spyOn(store, 'dispatch').and.callFake(() => { return ''});
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('changeGeneral method should dispatch updateGeneralForm action', () => {
    component.changeGeneral({key: 'heading', val: 'New heading'});

    expect(store.dispatch).toHaveBeenCalledWith(
      updateGeneralForm({key: 'heading', val: 'New heading'})
    );
  });

});
