import { 
  createAction, 
  props 
} from "@ngrx/store";
import { 
  FormElement, 
  SelectOption 
} from "src/app/service/interfaces";

export const addFormElement = createAction(
  '[Form Builder] Add Form Element',
  props<{ element: FormElement, index: number }>()
)

export const removeFormElement = createAction(
  '[Form Builder] Remove Form Element',
  props<{ id: string }>()
)

export const updateFormElement = createAction(
  '[Form Builder] Update Form Element',
  props<{ elementId: string, key: string, val: string }>()
)

export const swapFormElements = createAction(
  '[Form Builder] Swap Form Elements',
  props<{ index1: number, index2: number }>()
)

export const addOption = createAction(
  '[Form Builder select] Add option to select',
  props<{ selectId: string, content: SelectOption }>()
)

export const removeOption = createAction(
  '[Form Builder select] Remove option from select',
  props<{ selectId: string, optionId: string }>()
)

export const updateGeneralForm = createAction(
  '[Form General] Update General Form',
  props<{ key: string, val: string }>()
)

export const resetState = createAction(
  '[Logut] Reset State Back to Initial State'
)