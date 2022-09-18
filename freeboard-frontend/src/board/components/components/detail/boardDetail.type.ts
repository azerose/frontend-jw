import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardDetailWriteUI {
  onClickMoveList: () => void;
  onClickMoveEdit: () => void;
  onClickDisLike: () => void;
  onClickLike: () => void;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  data?: Pick<IQuery, "fetchBoard">;
}
