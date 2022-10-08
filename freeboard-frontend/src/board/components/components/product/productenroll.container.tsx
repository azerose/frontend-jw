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
import { Myyup } from "./productenroll.schema";

const EnrollProduct = () => {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(Myyup),
  });

  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState("");

  const [createUsedItem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USEDITEM);

  const onClickaddressSearch = () => {
    setIsOpen((prev) => !prev);
  };

  const onCompleteAddressSearch = () => {
    setAddress({ ...register("useditemAddress.address") });
    setIsOpen((prev) => !prev);
  };

  const onClickHandleCancel = () => {
    setIsOpen(false);
  };

  const onSubmitEnroll = (data: IFormData) => {
    const result = createUsedItem({
      variables: {
        createUseditemInput: data,
      },
    });
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
