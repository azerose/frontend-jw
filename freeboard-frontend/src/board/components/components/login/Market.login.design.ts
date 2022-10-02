import styled from "@emotion/styled";

export const KeepLoginSection = styled.section`
  display: flex;
  margin-top: 10px;
`;

export const KeepLoginBtn = styled.button`
  background: none;
  border: none;
`;

export const FooterSection = styled.section`
  display: flex;
  align-items: center;
  color: #c6c6c6;
`;

export const LoginBtnSection = styled.section`
  margin: 20px 0;
`;

export const LoginBtn = styled.button`
  background: red;
  width: 100%;
  padding: 13px 0;
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  font-size: 16px;
`;

export const EmailSection = styled.section`
  display: flex;
  align-items: center;
  margin: 5px 0 0 0;
  border: 2px solid #c6c6c6;
  padding: 5px 0;
  border-radius: 5px 5px 0 0;
`;

export const PassWordSection = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  border: 2px solid #c6c6c6;
  border-top: none;
  padding: 5px 0;
  border-radius: 0 0 5px 5px;
`;

export const EmailImg = styled.img`
  width: 33px;
  height: 33px;
  margin-left: 10px;
`;

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;
  border: 2px solid #c6c6c6;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 10px;
`;

export const LoginHeader = styled.section`
  margin: 0 auto 15px auto;
`;

export const HeaderWrapper = styled.header`
  margin: 50px;
`;

export const LoginLabel = styled.label`
  font-size: 20px;
  font-weight: bold;
`;

export const EmailInput = styled.input`
  margin-right: 10px;
  border: none;
  outline: none;
  &:focus {
    outline: 1px solid #f19e18;
    border-radius: 5px;
  }
`;

export const Footer = styled.footer`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const FinddSection = styled.section`
  margin: 0 5px;
  cursor: pointer;
`;
