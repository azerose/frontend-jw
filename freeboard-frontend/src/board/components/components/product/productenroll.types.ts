import { ChangeEvent, ChangeEventHandler, MouseEvent } from "react";
import { UseFormRegister } from "react-hook-form";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IEnrollProps {
  data: Pick<IQuery, "fetchUseditem">;
  isEdit: boolean;
}

export interface IEnrollProductUI {
  isOpen: boolean;
  onSubmitEnroll: (data: IFormData) => void;
  register: UseFormRegister<IFormData>;
  onClickHandleCancel: () => void;
  onCompleteAddressSearch: (data: any) => void;
  onClickaddressSearch: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMapSearch: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMapCancel: () => void;
  onClickEdit: (data: IFormData) => void;
  MapAddress: string;
  // handleSubmit:
  onChangeFile: any;
  imgUrl: string[];
  formState: any;
  isMapOpen: boolean;
  isEdit: boolean;
  data: Pick<IQuery, "fetchUseditem">;
}

interface UseditemAddressinput {
  zipcode: string;
  address: string;
  addressDetail: string;
  lat: number;
  lng: number;
}

export interface IFormData {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  tags: string[];
  useditemAddress: UseditemAddressinput;
  images: string[];
}
