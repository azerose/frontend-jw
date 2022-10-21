import { IQuery } from "../../../../commons/types/generated/types";

export interface IProductDetailWriteUI {
  data?: Pick<IQuery, "fetchUseditem">;
  onClickDelete: () => void;
  onClickMoveEdit: () => void;
  onClickBuy: () => void;
  onClickLike: () => void;
}
