import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { errorMsg } from "../../../../commons/modal/modalFun";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
  IQuery,
  IQueryFetchUseditemArgs,
  IUseditem,
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

  // useEffect(() => {
  //   localStorage.setItem("basket", JSON.stringify([router.query.id]));
  //   const baskets = JSON.parse(localStorage.getItem("basket") ?? "[]"); // basket에 있는 값을 배열로 받음
  //   const setArr = [...new Set(baskets.map(JSON.stringify))].map(JSON.parse);

  //   if (setArr.length > 5) {
  //     setArr.shift();
  //   }
  //   setArr.push(router.query.id);

  //   localStorage.setItem("basket", JSON.stringify(setArr));
  //   console.log(setArr);
  // }, []);

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
