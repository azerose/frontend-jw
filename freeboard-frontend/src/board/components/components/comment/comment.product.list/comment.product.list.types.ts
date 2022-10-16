import { Maybe } from "graphql/jsutils/Maybe";
import { ChangeEvent, MouseEvent } from "react";

export interface IProductCommentListUI {
  el: IEl;
  isOpen: boolean;
  onUpdateComment: boolean;
  getSaveId: string;
  onClickDeleteComment: (event: MouseEvent<HTMLElement>) => void;
  onSaveCommentId: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickModalCancel: () => void;
  onShowComment: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickEdit: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickReple: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickAddReple: () => void;
  onReple: boolean;
}

export interface IEl {
  _id: string;
  createdAt: Date;
  contents: string;
  user?: Maybe<string> | undefined;
}
