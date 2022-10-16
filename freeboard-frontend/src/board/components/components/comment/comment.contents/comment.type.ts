import { ChangeEvent, MouseEvent } from "react";
import {
  IQuery,
  IUseditemQuestion,
} from "../../../../../commons/types/generated/types";

export interface IWriteCommentUI {
  onChangeComment: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  comment: string;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickCreateComment: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeCommentPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeRating: (event: number) => void;
  rating: number;
  writer: string;
  pw: string;
  isMarket: boolean;
  onClickQuestion: () => void;
}

export interface IWriteComment {
  isMarket: boolean;
}

export interface ISeeCommentList {
  el: IUseditemQuestion;
  fetchMore: any;
  data?: Pick<IQuery, "fetchUseditemQuestions">;
}
