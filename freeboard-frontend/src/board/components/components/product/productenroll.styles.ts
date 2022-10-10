import { CheckCircleOutlined } from "@ant-design/icons";
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

export const ConditionWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductLabel = styled.label`
  margin: 0 10px;
`;

export const OutLineStyle = styled(CheckCircleOutlined)`
  margin-left: 10px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 75%;
`;

export const PriceInput = styled.input`
  width: 40%;
  height: 40px;
  border: 1px solid rgb(245, 126, 0);
  margin-right: 5px;
  outline: none;
`;

export const ContentsArea = styled.textarea`
  border: 1px solid rgb(245, 126, 0);
  width: 75%;
  outline: none;
`;

export const TagInput = styled.input`
  outline: none;
  border: 1px solid rgb(245, 126, 0);
  height: 50px;
  width: 75%;
`;

export const CountInput = styled.input`
  border: 1px solid rgb(245, 126, 0);
  height: 50px;
  width: 30%;
  margin-right: 10px;
`;

export const EnrollBtn = styled.button`
  background-color: red;
  color: white;
  border: none;
  width: 16%;
  height: 50px;
  cursor: pointer;
`;

export const EnrollBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const ImgBtn = styled.label`
  display: inline-block;
  width: 78px;
  height: 78px;
  margin-right: 24px;
  background-color: gray;
`;

export const ImgInput = styled.input`
  display: none;
`;

export const ErrorMsg = styled.div`
  margin-left: 10px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-around;
`;

export const AddressInputWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const LatInput = styled.input`
  width: 10%;
  margin: 0 10px;
`;

export const LngInput = styled.input`
  width: 10%;
`;
