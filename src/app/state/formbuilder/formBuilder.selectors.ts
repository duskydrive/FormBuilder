import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { FormBuilderState } from "src/app/service/interfaces";

export const selectFormBuilder = (state: AppState) => state.formBuilder;

export const selectFormElements = createSelector(
  selectFormBuilder,
  (state: FormBuilderState) => state.formElements
);

export const selectGeneralForm = createSelector(
  selectFormBuilder,
  (state: FormBuilderState) => state.generalForm
);

export const selectCurrentElement = createSelector(
  selectFormBuilder,
  (state: FormBuilderState) => state.currentElement
);

export const getItemById = (id: string) => createSelector(selectFormElements, (allItems) => {
  return allItems.find(item => {
    return item.id === id;
  });
});
