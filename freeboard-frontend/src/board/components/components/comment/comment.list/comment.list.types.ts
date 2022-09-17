import { MouseEvent } from "react";
import { IQuery } from "../../../../../commons/types/generated/types";

export interface ICommentListUI {
  data?: Pick<IQuery, "fetchBoardComments">;
  onClickDeleteComment: (event: MouseEvent<HTMLButtonElement>) => void;
}
