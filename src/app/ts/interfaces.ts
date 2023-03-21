export interface UserData {
  email: string | null | undefined,
  password: string | null | undefined,
  username?: string | null | undefined,
}

export interface FormElement {
  type: string,
  placeholderText: string,
  width: number,
  height: number,
  required: boolean,
  borderStyle: string, 
  fontSize: number,
  fontWeight: number,
  color: string,
}