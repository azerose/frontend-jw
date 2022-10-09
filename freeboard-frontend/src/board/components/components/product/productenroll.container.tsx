import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../commons/types/generated/types";
import EnrollProductUI from "./productenroll.presenter";
import { CREATE_USEDITEM } from "./productenroll.query";
import { IFormData } from "./productenroll.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { errorMsg, success } from "../../../../commons/modal/modalFun";
import { useRouter } from "next/router";
import { Myyup } from "./productenroll.schema";

const EnrollProduct = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<IFormData>({
    resolver: yupResolver(Myyup),
  });

  const [isOpen, setIsOpen] = useState(false);

  const [createUsedItem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USEDITEM);

  const onClickaddressSearch = () => {
    setIsOpen((prev) => !prev);
  };

  const onCompleteAddressSearch = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickHandleCancel = () => {
    setIsOpen(false);
  };

  const onSubmitEnroll = async (data: IFormData) => {
    console.log(data);
    try {
      const result = await createUsedItem({
        variables: {
          createUseditemInput: data,
        },
      });
      success("상품이 등록되었습니다");
      router.push("/");
    } catch (error) {
      if (error instanceof Error) errorMsg(error.message);
    }
  };

  return (
    <EnrollProductUI
      isOpen={isOpen}
      onSubmitEnroll={onSubmitEnroll}
      register={register}
      handleSubmit={handleSubmit}
      onClickHandleCancel={onClickHandleCancel}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onClickaddressSearch={onClickaddressSearch}
    />
  );
};

export default EnrollProduct;
