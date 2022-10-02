import { CheckCircleOutlined } from "@ant-design/icons";
import * as S from "./Market.login.design";
import { IMarketLogin } from "./Marketlogin.type";

const MarketLoginUI = ({
  onChangeEmail,
  onChangePassword,
  onClickLogin,
  onClickMoveSignUp,
}: IMarketLogin) => {
  return (
    <>
      <S.HeaderWrapper>
        <img src="/thundertrade.svg" />
      </S.HeaderWrapper>
      <S.MainWrapper>
        <S.LoginHeader>
          <S.LoginLabel>Login</S.LoginLabel>
        </S.LoginHeader>
        <div>
          <S.EmailSection>
            <S.EmailImg src="/id.png/" />
            <S.EmailInput type="text" onChange={onChangeEmail} />
          </S.EmailSection>
          <S.PassWordSection>
            <S.EmailImg src="/password.png/" />
            <S.EmailInput type="password" onChange={onChangePassword} />
          </S.PassWordSection>
        </div>
        <S.KeepLoginSection>
          <S.KeepLoginBtn>
            <CheckCircleOutlined />
          </S.KeepLoginBtn>
          <section>로그인 상태 유지</section>
        </S.KeepLoginSection>
        <S.LoginBtnSection>
          <S.LoginBtn onClick={onClickLogin}>로그인</S.LoginBtn>
        </S.LoginBtnSection>
      </S.MainWrapper>
      <S.Footer>
        <S.FooterSection>
          <S.FinddSection>비밀번호 찾기</S.FinddSection>
          <span>|</span>
          <S.FinddSection>아이디 찾기</S.FinddSection>
          <span>|</span>
          <S.FinddSection onClick={onClickMoveSignUp}>회원가입</S.FinddSection>
        </S.FooterSection>
      </S.Footer>
    </>
  );
};

export default MarketLoginUI;
