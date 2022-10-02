import { ChangeEvent } from "react";

export interface IMarketLogin {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: () => void;
  onClickMoveSignUp: () => void;
}
