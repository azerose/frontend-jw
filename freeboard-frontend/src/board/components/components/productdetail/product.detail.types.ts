import { IQuery } from "../../../../commons/types/generated/types";

export interface IProductDetailWriteUI {
  data?: Pick<IQuery, "fetchUseditem">;
}