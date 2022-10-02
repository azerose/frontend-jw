import { ChangeEvent } from "react";

export interface ISignUpPageUI {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePasswrodConfirm: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSignUp: () => void;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
}
