import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../../commons/types/generated/types";

export interface ICommentListUI {
  data?: Pick<IQuery, "fetchBoardComments">;
  onClickDeleteComment: (event: MouseEvent<HTMLElement>) => void;
  commentEditOnchange: (event: MouseEvent<HTMLButtonElement>) => void;
  onShowComment: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onSaveCommentId: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickModalCancel: () => void;
  onChangeInputPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onUpdateComment: boolean;
  getSaveId: string;
  isOpen: boolean;
}

export interface IUpdateBoardCommentInput {
  contents?: string;
  rating?: Number;
}

export interface IUpdateCommentData {
  password: string;
  boardCommentId: string;
  updateBoardCommentInput: IUpdateBoardCommentInput;
}
