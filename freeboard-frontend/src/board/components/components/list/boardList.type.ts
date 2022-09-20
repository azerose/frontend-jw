import { IQuery } from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";

export interface IListWriteUI {
  onClickMoveCreate: (event: MouseEvent<HTMLButtonElement>) => void;
  data?: Pick<IQuery, "fetchBoards">;
  onClickMoveDetail: (event: MouseEvent<HTMLDivElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  startPage: number;
  lastPage: number;
  isChange: number;
}

export interface ISpan {
  isChange: number;
}
