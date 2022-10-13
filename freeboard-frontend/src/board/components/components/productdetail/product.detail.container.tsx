import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { errorMsg } from "../../../../commons/modal/modalFun";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import ProductDetailWriteUI from "./product.detail.presenter";
import { DELETE_USEDITEM, FETCH_USEDITEM } from "./product.detail.query";

const ProductDetailWrite = () => {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, { variables: { useditemId: String(router.query.id) } });

  const [deleteUsedItem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USEDITEM);

  const onClickDelete = () => {
    try {
      deleteUsedItem({ variables: { useditemId: String(router.query.id) } });
    } catch (error) {
      if (error instanceof Error) {
        errorMsg(error.message);
      }
    }
    void router.push("/");
  };

  const onClickMoveEdit = () => {
    router.push(`/Market/detail/${router.query.id}/edit`);
  };

  return (
    <ProductDetailWriteUI
      data={data}
      onClickDelete={onClickDelete}
      onClickMoveEdit={onClickMoveEdit}
    />
  );
};

export default ProductDetailWrite;
