import { IQuery } from "../../../../commons/types/generated/types";
import { ChangeEvent, MouseEvent } from "react";

export interface IListWriteUI {
  onClickMoveCreate: (event: MouseEvent<HTMLButtonElement>) => void;
  data?: Pick<IQuery, "fetchBoards">;
  onClickMoveDetail: (event: MouseEvent<HTMLDivElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickSearch: () => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  startPage: number;
  lastPage: number;
  isChange: number;
  RangePicker: any;
  dateFormat: any;
}

export interface ISpan {
  isChange: number;
}
