import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import ProductDetailWriteUI from "./product.detail.presenter";
import { FETCH_USEDITEM } from "./product.detail.query";

const ProductDetailWrite = () => {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, { variables: { useditemId: String(router.query.id) } });

  return <ProductDetailWriteUI data={data} />;
};

export default ProductDetailWrite;
