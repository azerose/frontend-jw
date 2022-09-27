import { ChangeEvent, MouseEvent } from "react";
import { IMutation, IQuery } from "../../../../commons/types/generated/types";

export interface IBoardProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}
export interface IUpdateBoardInputs {
  title?: string;
  contents?: string;
}

export interface IUpdateBoardInput {
  updateBoardInput: IUpdateBoardInputs;
  password: string;
  boardId: string;
}

export interface IBoardWriteUI {
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePs: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeMain: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeLk: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddt: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSignUp: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickAddressSearch: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickHandleCancel: () => void;
  onCompleteAddressSearch: (data: any) => void;
  onClickImage: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  ner: string;
  per: string;
  ter: string;
  mer: string;
  ater: string;
  ler: string;
  change: boolean;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  isOpen: boolean;
  add: string;
  addo: string;
  fileRef: any;
}
