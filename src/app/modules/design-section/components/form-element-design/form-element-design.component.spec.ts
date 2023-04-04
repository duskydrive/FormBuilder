import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { SendElementIdService } from 'src/app/shared/service/send-element-id.service';
import { AppState } from 'src/app/shared/state/app.state';
import { addOption, removeFormElement, removeOption, updateFormElement } from 'src/app/shared/state/formbuilder/formbuilder.actions';
import { selectFormElements } from 'src/app/shared/state/formbuilder/formBuilder.selectors';

import { FormElementDesignComponent } from './form-element-design.component';

describe('FormElementDesignComponent', () => {
  let component: FormElementDesignComponent;
  let fixture: ComponentFixture<FormElementDesignComponent>;
  let store: MockStore<AppState>;
  // const sendElService: SendElementIdService = jasmine.createSpyObj('SendElementIdService', ['share']);
  // let spy: SendElementIdService;
  let mockFormElementsSelector;
  const formElementsArr = [
    {
      id: '111',
      type: 'input',
      placeholderText: 'Input placeholder',
      width: 100,
      height: 50,
      required: false,
      borderWidth: '1',
      borderColor: '#cccccc',
      borderStyle: 'solid', 
      fontSize: 14,
      fontWeight: 400,
      color: '#000000',
    },
    {
      id: '222',
      type: 'textarea',
      placeholderText: 'Text placeholder',
      width: 100,
      height: 100,
      required: false,
      borderWidth: '1',
      borderColor: '#cccccc',
      borderStyle: 'solid', 
      fontSize: 14,
      fontWeight: 400,
      color: '#000000',
    },
    {
      id: '333',
      type: 'button',
      placeholderText: 'Btn text',
      width: 100,
      height: 50,
      required: false,
      borderWidth: '1',
      borderColor: '#cccccc',
      borderStyle: 'solid', 
      fontSize: 14,
      fontWeight: 400,
      color: '#fff',
      backgroundColor: '#3f51b5',
    },
    {
      id: '444',
      type: 'checkbox',
      placeholderText: 'Placeholder',
      width: 15,
      required: false,
      fontSize: 14,
      fontWeight: 400,
      color: '#000000',
    },
    {
      id: '555',
      type: 'select',
      placeholderText: 'Select your option',
      width: 100,
      height: 50,
      required: false,
      borderWidth: '1',
      borderColor: '#cccccc',
      borderStyle: 'solid', 
      fontSize: 14,
      fontWeight: 400,
      color: '#000000',
      options: [],
    },
  ];

  @Component({
    selector: 'app-form-element',
    template: '<div></div>',
  })
  class MockAppFormElementComponent {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockAppFormElementComponent, FormElementDesignComponent ],
      providers: [
        provideMockStore({}),
        // {provide: SendElementIdService, useValue: sendElService}
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormElementDesignComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    // spy = TestBed.inject(SendElementIdService);
    mockFormElementsSelector = store.overrideSelector(
      selectFormElements,
      formElementsArr
    )
    fixture.detectChanges();
    store.refreshState();
    spyOn(store, 'dispatch').and.callFake(() => { return ''});
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('changeField method should dispatch updateFormElement action', () => {
    component.changeField({elementId: '111', key: 'placeholderText', val: 'New placeholder'});

    expect(store.dispatch).toHaveBeenCalledWith(
      updateFormElement({elementId: '111', key: 'placeholderText', val: 'New placeholder'})
    );
  });

  it('launchAddOption method should dispatch addOption action', () => {
    component.launchAddOption({selectId: '555', optionId: '1111', value: 'New option'});

    expect(store.dispatch).toHaveBeenCalledWith(
      addOption({selectId: '555', optionId: '1111', value: 'New option'})
    );
  });

  it('launchRemoveOption method should dispatch removeOption action', () => {
    component.launchRemoveOption({selectId: '555', value: '666'});

    expect(store.dispatch).toHaveBeenCalledWith(
      removeOption({selectId: '555', optionId: '666'})
    );
  });

  it('removeElement method should dispatch removeFormElement action', () => {
    component.removeElement('555');

    expect(store.dispatch).toHaveBeenCalledWith(
      removeFormElement({id: '555'})
    );
  });
});
