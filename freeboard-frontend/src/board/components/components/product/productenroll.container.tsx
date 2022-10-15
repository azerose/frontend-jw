import { useMutation } from "@apollo/client";
import { ChangeEvent, useEffect, useState } from "react";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import EnrollProductUI from "./productenroll.presenter";
import {
  CREATE_USEDITEM,
  UPDATE_USEDITEM,
  UPLOAD_FILE,
} from "./productenroll.query";
import { IEnrollProps, IFormData } from "./productenroll.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { errorMsg, success } from "../../../../commons/modal/modalFun";
import { useRouter } from "next/router";
import { Myyup } from "./productenroll.schema";
import { checkValidationFile } from "../../../commons/validation/validationFile";
import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { MapAddressState } from "../../../../commons/store";

const EnrollProduct = (props: IEnrollProps) => {
  const router = useRouter();
  const { register, handleSubmit, formState, setValue } = useForm<IFormData>({
    resolver: yupResolver(Myyup),
    mode: "onChange",
  });
  const [imgUrl, setImgUrl] = useState(["", "", ""]);
  const [isOpen, setIsOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);

  const [MapAddress, setMapAddress] = useRecoilState(MapAddressState);

  const [createUsedItem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USEDITEM);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [updateUsedItem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USEDITEM);

  const onClickaddressSearch = () => {
    setIsOpen((prev) => !prev);
  };

  const onCompleteAddressSearch = (data: any) => {
    setMapAddress(data.address);
    setIsOpen((prev) => !prev);
    setValue("useditemAddress.address", data.address);
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

  const onChangeLat = (value: number) => {
    setValue("useditemAddress.lat", value);
  };

  const onChangeLng = (value: number) => {
    setValue("useditemAddress.lng", value);
  };

  const onChangeContents = (value: string) => {
    setValue("contents", value);
  };

  useEffect(() => {}, [MapAddress]);

  const onSubmitEnroll = async (data: IFormData) => {
    try {
      data.price = Number(data.price);
      data.images = imgUrl;
      data.useditemAddress.lat = Number(data.useditemAddress.lat);
      data.useditemAddress.lng = Number(data.useditemAddress.lng);
      console.log(data);
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

  const onClickEdit = async (data: IFormData) => {
    try {
      console.log(typeof Number(data.price));
      data.price = Number(data.price);
      const result = await updateUsedItem({
        variables: {
          updateUseditemInput: data,
          useditemId: String(router.query.id),
        },
      });
      router.push(`/Market/detail/${result?.data?.updateUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) {
        errorMsg(error.message);
      }
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
      onChangeFile={onChangeFile}
      imgUrl={imgUrl}
      formState={formState}
      isMapOpen={isMapOpen}
      onClickMapSearch={onClickMapSearch}
      onClickMapCancel={onClickMapCancel}
      onChangeLat={onChangeLat}
      onChangeLng={onChangeLng}
      MapAddress={MapAddress}
      isEdit={props.isEdit}
      onClickEdit={onClickEdit}
      data={props.data}
      onChangeContents={onChangeContents}
    />
  );
};

export default EnrollProduct;
