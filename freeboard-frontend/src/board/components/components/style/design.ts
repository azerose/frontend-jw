import styled from "@emotion/styled";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import { ISpan } from "../list/boardList.type";

export const Header = styled.div`
  text-align: center;
  & h3 {
    font-size: 36px;
    font-weight: 700;
  }
`;

export const Wrapper = styled.div`
  width: 1200px;
  padding: 60px 102px;
  margin: 100px auto;
  box-shadow: 0px 0px 10px gray;
  border: none;
  position: relative;
`;

export const Wrapper_id = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NamePasswordDiv = styled.div`
  width: 48.6%;
  padding: 12px 0px;
  font-size: 16px;
  font-weight: 500;
`;

export const InputBox = styled.div`
  padding-top: 16px;
`;

export const WrapperDivide = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
  font-size: 16px;
  font-weight: 500;
`;

export const DefaultInput = styled.input`
  width: 100%;
  height: 52px;
`;

export const SecInput = styled.textarea`
  width: 100%;
  height: 480px;
`;

export const ThirdInput = styled.input`
  width: 77px;
  height: 52px;
  text-align: center;
`;

export const FirstButton = styled.button`
  width: 124px;
  height: 52px;
  background-color: Black;
  color: white;
  margin: 0px 16px;
`;

export const SecButton = styled.button`
  width: 78px;
  height: 78px;
  margin-right: 24px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FourthInput = styled.input`
  margin: 0px 10px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
`;

interface IChange {
  change: boolean;
}

export const LastButton = styled.button`
  width: 179px;
  height: 52px;
  background-color: ${({ change }: IChange) =>
    change ? "#ffd600" : "default"};
  border: 0px;
  font-size: 16px;
  font-weight: 500;
`;

export const Error = styled.div`
  color: red;
  font-size: 5px;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  margin-bottom: 40px;
  position: relative;
`;

export const Profile_Id = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;
  gap: 16px;
`;

export const Name_Date = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Name = styled.div`
  font-size: 24px;
  font-weight: 500;
`;

export const Date = styled.div`
  color: #828282;
  font-size: 16px;
  font-weight: 400;
`;

export const Image = styled.div`
  width: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 36px;
  margin: 40px 0;
`;

export const Content = styled.div`
  margin: 40px 0;
  font-size: 16px;
`;

export const Link = styled.iframe`
  width: 486px;
  height: 240px;
  margin: 80px auto;
`;

export const LinkWrapper = styled.div`
  margin: 20px auto;
`;

export const Footer_Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 120px;
  margin: 0 auto;
`;

export const Like_Count = styled.div`
  margin-top: 4px;
  color: rgb(255, 214, 0);
  font-size: 18px;
`;

export const Img_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Hate_Count = styled.div`
  margin-top: 1px;
  color: #828282;
  font-size: 18px;
`;

export const Like_Btn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const Location = styled.div`
  width: 376px;
  height: 64px;
  display: flex;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  top: -54px;
  right: 15px;
  justify-content: flex-end;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 500;
  &::after {
    display: block;
    content: "";
    width: 0px;
    height: 0px;
    border-top: 8px solid #666666;
    border-bottom: 0px solid transparent;
    border-left: 12px solid transparent;
    border-right: 0px solid transparent;
    position: absolute;
    bottom: -8px;
    right: 0;
  }
`;

export const Triangle = styled.div``;

export const ListHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const BestPost = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

/* A styled component. */
export const BestPostTitle = styled.div`
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 40px;
  background-color: #ffe05c;
`;

export const BestPostContents = styled.div`
  width: 23%;
  margin: auto;
  border: none;
  border-radius: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;
export const BestPostImg = styled.div`
  background: url(/caat.jpg) no-repeat;
  width: 100%;
  padding-bottom: 42%;
  background-size: cover;
  background-position: 50% 50%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  &:not(:last-child) {
    border-bottom: 1px solid #bdbdbd;
  }
`;

export const Column = styled.div`
  width: 20%;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  line-height: 40px;
  cursor: pointer;
`;

export const ListTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 1px solid #000000;
  border-bottom: none;
  border-radius: 20px 20px 0 0;
  font-size: 18px;
  font-weight: 500;
  div {
    width: 20%;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    line-height: 40px;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #000000;
  border-radius: 0 0 20px 20px;
  font-size: 12px;
`;

export const CreateBtn = styled.button`
  background-color: rgba(242, 242, 242, 0.4);
  border-radius: 20px;
  font-size: 16px;
  font-weight: 500;
  width: 23%;
  padding: 20px;
`;

export const CreateBtnWrapper = styled.div`
  text-align: center;
  padding: 40px;
`;

export const BigWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EditWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
  align-items: center;
`;
export const EditBtnBox = styled.div`
  width: 1200px;
  margin: 100px auto;
  display: flex;
  justify-content: flex-end;
`;

export const ChangeBtn = styled.button`
  background-color: rgba(255, 212, 0, 0.6);
  cursor: pointer;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 500;
  padding: 50px;
`;

export const AddressModal = styled(Modal)``;

export const AddressSearchInput = styled(DaumPostcode)``;

export const Span = styled.span`
  color: ${({ isChange }: ISpan) => (isChange ? "skyblue" : "default")};
  cursor: pointer;
`;

export const PageChanger = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const PageChagnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

export const Nextimg = styled.img`
  width: 14px;
`;

export const PrevImg = styled.img`
  width: 14px;
  transform: rotate(0.5turn);
`;

export const ImageLink = styled.input`
  display: none;
`;
