import styled from "@emotion/styled";

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
  margin: 0 auto;
  box-shadow: 0px 0px 10px gray;
  border: none;
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

export const LastButton = styled.button`
  width: 179px;
  height: 52px;
  background-color: ${({ change }) => (change ? "#ffd600" : "default")};
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
  border: 1px solid red;
`;

export const BestPost = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid red;
  justify-content:space-between: 
`;
