import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardDetailWriteUI {
  onClickMoveList: () => void;
  onClickMoveEdit: () => void;
  onClickDisLike: () => void;
  onClickLike: () => void;
  data?: Pick<IQuery, "fetchBoard">;
}
