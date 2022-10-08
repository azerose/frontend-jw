import styled from "@emotion/styled";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";

export const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px 0;
  border-top: 2px solid black;
`;

export const ProductInfoWrapper = styled.div`
  display: flex;
  height: 440px;
  border-bottom: 1px solid rgb(220, 219, 228);
  padding: 32px 0;
`;

export const ProductInfo = styled.div`
  width: 20%;
  font-size: 18px;
`;

export const MainForm = styled.form`
  width: 1200px;
`;

export const ProductTitleWrapper = styled.div`
  display: flex;
  height: 140px;
  border-bottom: 1px solid rgb(220, 219, 228);
  padding: 32px 0;
  align-items: center;
`;

export const ProductTitleInput = styled.input`
  width: 75%;
  height: 50px;
  padding: 10px;
  border: 1px solid rgb(245, 126, 0);
  outline: none;
`;

export const ProductTitleCount = styled.div`
  margin-left: 24px;
`;

export const SellerInput = styled.input`
  width: 20%;
  border: 1px solid rgb(245, 126, 0);
  height: 50px;
  padding: 10px;
  outline: none;
`;
export const AddressModal = styled(Modal)``;

export const AddressSearchInput = styled(DaumPostcodeEmbed)``;

export const AddressWrapper = styled.div`
  display: flex;
  height: 140px;
  border-bottom: 1px solid rgb(220, 219, 228);
  padding: 32px 0;
  align-items: center;
`;

export const AddressBtn = styled.button`
  width: 100px;
  height: 50px;
  border: 1px solid rgb(245, 126, 0);
  background: none;
  cursor: pointer;
`;

export const AddressBtnWrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  height: 140px;
  padding: 20px 0;
  justify-content: space-between;
`;

export const RemarksInput = styled.input`
  width: 75%;
  border: 1px solid rgb(245, 126, 0);
  height: 50px;
  padding: 10px;
  outline: none;
`;

export const AddressInput = styled.input`
  width: 75%;
  height: 40px;
  border: 1px solid rgb(245, 126, 0);
`;
