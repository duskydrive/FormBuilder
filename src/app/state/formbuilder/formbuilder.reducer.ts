import { createReducer, on } from "@ngrx/store";
import { FormElement, FormBuilderState } from "src/app/service/interfaces";
import { 
  addFormElement, 
  removeFormElement, 
  updateFormElement,
  addOption,
  removeOption,
  updateGeneralForm,
  swapFormElements,
  selectFormElement,
  updateCurrentElement,
  addOptionToCurrentElement,
  removeOptionFromCurrentElement,
  removeCurrentElement,
  resetState,
} from "./formbuilder.actions";

export const initialState: FormBuilderState = {
  formElements: [],
  generalForm: {
    heading: 'Form Builder',
    borderWidth: '1',
    borderColor: '#cccccc',
    borderStyle: 'solid', 
    fontSize: 20,
    fontWeight: 500,
    color: '#000000',
    backgroundColor: '#ffffff',
  },
  currentElement: undefined,
}

const sortNewElement = (arr: FormElement[], index: number, newElement: FormElement) => {
  const copyArr = arr.slice();
  const newElementClone = Object.assign({
    id: Date.now().toString(),
  }, newElement);

  for (let i = copyArr.length; i > index; i--) {
    copyArr[i] = copyArr[i-1];
  }

  copyArr[index] = newElementClone;
  return copyArr
}

const sortElements = (arr: FormElement[], index1: number, index2: number ) => {
  const results = arr.slice();
  // from start index to new index
  const temp = results[index1];
 
  if (index1 < index2) {
    for (let i = index1; i < index2; i++) {
      results[i] = results[i+1]
    }
  } else {
    for (let i = index1; i > index2; i--) {
      results[i] = results[i-1]
    }
  }
  results[index2] = temp
  return results
}

export const formBuilderReducer = createReducer(
  initialState,
  on(addFormElement, (state, { element, index }) => ({
    ...state,
    formElements: sortNewElement(state.formElements, index, element)
  })),
  on(removeFormElement, (state, { id }) => ({
    ...state,
    formElements: state.formElements.filter((el) => el.id !== id)
  })),
  on(updateFormElement, (state, { elementId, key, val }) => ({
    ...state,
    formElements: state.formElements.map((item => item.id === elementId ? {...item, [key]: val} : item ))
  })),
  on(swapFormElements, (state, { index1, index2 }) => ({
    ...state,
    formElements: sortElements(state.formElements, index1, index2),
  })),
  on(addOption, (state, { selectId, content }) => ({
    ...state,
    formElements: state.formElements.map((item) => {
      if ( item.id !== selectId ) {
        return item
      }
      return {
        ...item,
        options: item.options?.concat(content),
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
  on(selectFormElement, (state, { element }) => ({
    ...state,
    currentElement: element,
  })),
  on(updateCurrentElement, (state, { key, val }) => ({
    ...state,
    currentElement: {
      ...state.currentElement!,
      [key]: val,
    }
    // state.formElements.map((item => item.id === elementId ? {...item, [key]: val} : item ))
  })),
  on(addOptionToCurrentElement, (state, { data }) => ({
    ...state,
    currentElement: {
      ...state.currentElement!,
      options: [
        ...state.currentElement!.options!,
      ].concat(data)
    }
  })),
  on(removeOptionFromCurrentElement, (state, { optionId }) => ({
    ...state,
    currentElement: {
      ...state.currentElement!,
      options: [
        ...state.currentElement!.options!,
      ].filter((el) => el.id !== optionId)
    }
  })),
  on(removeCurrentElement, (state) => ({
    ...state,
    currentElement: undefined,
  })),
  on(resetState, () => ({
    ...initialState,
  })),
)
