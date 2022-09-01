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
  background: #ffd600;
  border: 0px;
  font-size: 16px;
  font-weight: 500;
`;

export const Error = styled.div`
  color: red;
  font-size: 5px;
`;
