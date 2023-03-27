import { createAction, props } from "@ngrx/store";
import { FormElement, SelectOption } from "src/app/service/interfaces";

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

export const selectFormElement = createAction(
  '[Fields Styling] Select a Form Element',
  props<{ element: FormElement }>()
)

export const updateCurrentElement = createAction(
  '[Form Builder] Update Current Form Element',
  props<{ key: string, val: string }>()
)

export const addOptionToCurrentElement = createAction(
  '[Fields Styling] Add option to select of current element',
  props<{ data: SelectOption }>()
)

export const removeOptionFromCurrentElement = createAction(
  '[Fields Styling] Remove option from select of current element',
  props<{ optionId: string }>()
)

export const removeCurrentElement = createAction(
  '[Fields Styling] Remove current element'
)

export const resetState = createAction(
  '[Logut] Reset State Back to Initial State'
)