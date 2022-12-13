import { ChangeEvent, MouseEvent } from "react";

export interface IRepleListWriteUI {
  isOpen: boolean;
  el: any;
  getSaveId: string;
  onClickModalCancel: () => void;
  onSaveCommentId: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickDelete: () => void;
  onUpdateComment: boolean;
  onShowComment: (event: MouseEvent<HTMLButtonElement>) => void;
  QuestionId: string;
  onClickEdit: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
