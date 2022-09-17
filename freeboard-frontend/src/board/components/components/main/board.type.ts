import { ChangeEvent, MouseEvent } from "react";
import { IMutation, IQuery } from "../../../../commons/types/generated/types";

export interface IBoardProps {
  isEdit: boolean;
  data?: Pick<IMutation, "createBoard">;
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
  onChangeAdd: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddo: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddt: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSignUp: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
  ner: string;
  per: string;
  ter: string;
  mer: string;
  aer: string;
  ater: string;
  ler: string;
  change: boolean;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}
