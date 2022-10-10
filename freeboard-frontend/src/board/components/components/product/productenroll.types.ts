import { ChangeEvent, MouseEvent } from "react";
import { UseFormRegister } from "react-hook-form";

export interface IEnrollProductUI {
  isOpen: boolean;
  onSubmitEnroll: (data: IFormData) => void;
  register: UseFormRegister<IFormData>;
  onClickHandleCancel: () => void;
  onCompleteAddressSearch: (data: any) => void;
  onClickaddressSearch: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMapSearch: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMapCancel: () => void;
  address: string;
  // handleSubmit:
  onChangeFile: any;
  imgUrl: string[];
  formState: any;
  isMapOpen: boolean;
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
