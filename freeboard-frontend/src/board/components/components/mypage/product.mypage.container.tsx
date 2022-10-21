import { useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
  IQuery,
} from "../../../../commons/types/generated/types";
import MyPageWriteUI from "./product.mypage.presenter";
import {
  CREATE_POINT_TRANSACTION,
  FETCH_USER_LOGGEDIN,
} from "./product.mypage.queries";

declare const window: typeof globalThis & {
  IMP: any;
};

const MyPageWrite = () => {
  const [point, setPoint] = useState(0);

  const [createPointTransactionOfLoading] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_TRANSACTION);

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGEDIN);

  const onClickCharge = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card",
        name: "충전",
        amount: point,
        buyer_email: "gildong@gmail.com",
        buyer_name: data?.fetchUserLoggedIn.name,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
      },

      (rsp: any) => {
        console.log(rsp);
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
            },
          });
        } else {
          // 결제 실패 시 로직,
        }
      }
    );
  };

  const onChangePoint = (event: ChangeEvent<HTMLInputElement>) => {
    setPoint(Number(event.currentTarget.value));
  };

  return (
    <MyPageWriteUI
      onClickCharge={onClickCharge}
      onChangePoint={onChangePoint}
      data={data}
    />
  );
};

export default MyPageWrite;
