import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import EnrollProductUI from "./productenroll.presenter";
import { CREATE_USEDITEM, UPLOAD_FILE } from "./productenroll.query";
import { IFormData } from "./productenroll.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { errorMsg, success } from "../../../../commons/modal/modalFun";
import { useRouter } from "next/router";
import { Myyup } from "./productenroll.schema";
import { checkValidationFile } from "../../../commons/validation/validationFile";
import { Modal } from "antd";

const EnrollProduct = () => {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(Myyup),
    mode: "onChange",
  });
  const [imgUrl, setImgUrl] = useState(["", "", ""]);
  const [isOpen, setIsOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [address, setAddress] = useState("");

  const [createUsedItem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USEDITEM);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onClickaddressSearch = () => {
    setIsOpen((prev) => !prev);
  };

  const onCompleteAddressSearch = (data: any) => {
    setAddress(data.address);
    setIsOpen((prev) => !prev);
  };

  const onClickHandleCancel = () => {
    setIsOpen(false);
  };

  const onClickMapSearch = () => {
    setIsMapOpen((prev) => !prev);
  };

  const onClickMapCancel = () => {
    setIsMapOpen(false);
  };

  const onSubmitEnroll = async (data: IFormData) => {
    try {
      data.price = Number(data.price);
      data.images = imgUrl;
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

  const onChangeFile =
    (index: number) => async (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      const isValid = checkValidationFile(file);
      if (!isValid) return;
      try {
        const result = await uploadFile({ variables: { file } });
        const newImgUrls = [...imgUrl];
        newImgUrls[index] = result.data?.uploadFile.url;
        setImgUrl(newImgUrls);
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
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
      address={address}
      onChangeFile={onChangeFile}
      imgUrl={imgUrl}
      formState={formState}
      isMapOpen={isMapOpen}
      onClickMapSearch={onClickMapSearch}
      onClickMapCancel={onClickMapCancel}
    />
  );
};

export default EnrollProduct;
