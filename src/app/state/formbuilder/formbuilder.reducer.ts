import { createReducer, on } from "@ngrx/store";
import { FormElement, FormBuilderState } from "src/app/ts/interfaces";
import { 
  addFormElement, 
  removeFormElement, 
  updateFormElement,
  addOption,
  removeOption,
  updateGeneralForm,
} from "./formbuilder.actions";

export const initialState: FormBuilderState = {
  formElements: [],
  generalForm: {
    heading: 'Form Builder',
    borderStyle: 'initial', 
    fontSize: 20,
    fontWeight: 500,
    color: '#000',
    backgroundColor: '#fff',
  },
}

export const formBuilderReducer = createReducer(
  initialState,
  on(addFormElement, (state, { element }) => ({
    ...state,
    formElements: [...state.formElements, { id: Date.now().toString(), ...element}]
  })),
  on(removeFormElement, (state, { id }) => ({
    ...state,
    formElements: state.formElements.filter((el) => el.id !== id)
  })),
  on(updateFormElement, (state, { elementId, key, val }) => ({
    ...state,
    formElements: state.formElements.map((item) => {
      if ( item.id !== elementId ) {
        return item
      }
      return {
        ...item,
        [key]: val,
      }
    })
  })),
  on(addOption, (state, { selectId, content }) => ({
    ...state,
    formElements: state.formElements.map((item) => {
      if ( item.id !== selectId ) {
        return item
      }
      return {
        ...item,
        options: item.options?.concat({id: Date.now().toString(), content}),
      }
    })
  })),
  on(removeOption, (state, { selectId, optionId }) => ({
    ...state,
    formElements: state.formElements.map((item) => {
      if ( item.id !== selectId ) {
        return item
      }
      return {
        ...item,
        options: item.options?.filter((el) => el.id !== optionId)
      }
    })
  })),
  on(updateGeneralForm, (state, { key, val }) => ({
    ...state,
    generalForm: {
      ...state.generalForm,
      [key]: val,
    }
  })),
)