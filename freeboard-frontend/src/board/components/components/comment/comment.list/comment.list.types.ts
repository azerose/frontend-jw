import { Maybe } from "graphql/jsutils/Maybe";
import { ChangeEvent, MouseEvent } from "react";
import {
  IBoardComment,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../../commons/types/generated/types";

export interface IEl {
  _id: string;
  writer?: Maybe<string> | undefined;
  rating: number;
  contents: string;
  createdAt: Date;
}

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
  el: IEl;
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

export interface IWatchCommentList {
  el: IBoardComment;
  fetchMore: any;
  data?: Pick<IQuery, "fetchBoardComments">;
}
