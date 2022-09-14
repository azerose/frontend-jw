import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IWriteCommentUI {
  onChangeComment: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  data: Pick<IQuery, "fetchBoardComments">;
  comment: string;
  onChangeWriter: (evnet: ChangeEvent<HTMLInputElement>) => void;
  onClickCreateComment: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickDeleteComment: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeCommentPassword: (event: ChangeEvent<HTMLInputElement>) => void;
}
