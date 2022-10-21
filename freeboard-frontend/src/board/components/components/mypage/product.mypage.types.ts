import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IMyPageWriteUI {
  data?: Pick<IQuery, "fetchUserLoggedIn">;
  onChangePoint: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickCharge: () => void;
}
