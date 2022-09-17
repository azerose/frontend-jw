import { ChangeEvent, MouseEvent } from "react";

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
}
