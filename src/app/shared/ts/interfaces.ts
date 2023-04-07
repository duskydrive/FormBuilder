export interface UserData {
  email: string | null | undefined,
  password: string | null | undefined,
  username?: string | null | undefined,
}

export interface SelectOptionPair {
  selectId: string,
  value: string,
}

export interface AddSelectOption {
  selectId: string,
  optionId: string,
  value: string,
}

export interface SelectOption {
  id: string,
  content: string,
}

export interface FormStyles {
  placeholderText: string,
  width: number,
  height?: number,
  required: boolean,
  borderWidth?: string,
  borderColor?: string,
  borderStyle?: string, 
  fontSize: number,
  fontWeight: number,
  color: string,
  backgroundColor?: string,
}

export interface FormElement {
  id: string,
  type: string,
  styles: {
    placeholderText: string,
    width: number,
    height?: number,
    required: boolean,
    borderWidth?: string,
    borderColor?: string,
    borderStyle?: string, 
    fontSize: number,
    fontWeight: number,
    color: string,
    backgroundColor?: string,
  },
  options?: SelectOption[],
}

export interface GeneralFormStyles {
  placeholderText: string,
  borderWidth: string,
  borderColor: string,
  borderStyle: string, 
  fontSize: number,
  fontWeight: number,
  color: string,
  backgroundColor: string,
}

export interface FormBuilderState {
  formElements: FormElement[],
  generalForm: GeneralFormStyles,
}

export interface UserState {
  username: string,
  email: string,
}

export interface OptionField {
  elementId: string, 
  key: string, 
  val: string
}

export interface KeyValuePair {
  key: string, 
  value: string
}

export interface UserData {
  email: string | null | undefined,
  password: string | null | undefined,
  username?: string | null | undefined,
}
