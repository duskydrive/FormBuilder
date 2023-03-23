import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { FormBuilderState, FormElement } from "src/app/ts/interfaces";
import { Observable } from "rxjs";

export const selectFormBuilder = (state: AppState) => state.formBuilder;

export const selectFormElements = createSelector(
  selectFormBuilder,
  (state: FormBuilderState) => state.formElements
) as any;

export const selectGeneralForm = createSelector(
  selectFormBuilder,
  (state: FormBuilderState) => state.generalForm
) as any;