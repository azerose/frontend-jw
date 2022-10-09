import { MouseEvent } from "react";
import { UseFormRegister } from "react-hook-form";

export interface IEnrollProductUI {
  isOpen: boolean;
  onSubmitEnroll: (data: IFormData) => void;
  register: UseFormRegister<IFormData>;
  onClickHandleCancel: () => void;
  onCompleteAddressSearch: (data: any) => void;
  onClickaddressSearch: (event: MouseEvent<HTMLButtonElement>) => void;
  // handleSubmit:
}

interface UseditemAddressinput {
  zipcode: string;
  address: string;
  addressDetail: string;
  lat: number;
  lng: number;
}

export interface IFormData {
  seller: string;
  name: string;
  remarks: string;
  contents: string;
  price: number;
  tags: string[];
  useditemAddress: UseditemAddressinput;
  images: string[];
  pickedCount: number;
}
