import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { FormBuilderState } from "src/app/ts/interfaces";

export const selectFormBuilder = (state: AppState) => state.formBuilder;

export const selectFormElements = createSelector(
  selectFormBuilder,
  (state: FormBuilderState) => state.formElements
);

export const selectGeneralForm = createSelector(
  selectFormBuilder,
  (state: FormBuilderState) => state.generalForm
);