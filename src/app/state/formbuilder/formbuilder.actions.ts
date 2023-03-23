import { createAction, props } from "@ngrx/store";
import { FormElement } from "src/app/ts/interfaces";

export const addFormElement = createAction(
  '[Form Builder] Add Form Element',
  props<{ element: FormElement }>()
)

export const removeFormElement = createAction(
  '[Form Builder] Remove Form Element',
  props<{ id: string }>()
)

export const updateFormElement = createAction(
  '[Form Builder] Update Form Element',
  props<{ elementId: string, key: string, val: string }>()
)

export const addOption = createAction(
  '[Form Builder select] Add option to select',
  props<{ selectId: string, content: string }>()
)

export const removeOption = createAction(
  '[Form Builder select] Remove option from select',
  props<{ selectId: string, optionId: string }>()
)

export const updateGeneralForm = createAction(
  '[Form Builder] Update General Form',
  props<{ key: string, val: string }>()
)