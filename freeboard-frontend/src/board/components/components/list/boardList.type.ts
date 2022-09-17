import { IQuery } from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";

export interface IListWriteUI {
  onClickMoveCreate: (event: MouseEvent<HTMLButtonElement>) => void;
  data?: Pick<IQuery, "fetchBoards">;
  onClickMoveDetail: (event: MouseEvent<HTMLDivElement>) => void;
}
