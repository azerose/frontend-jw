import { CheckCircleOutlined } from "@ant-design/icons";
import * as S from "./Market.login.design";

const MarketLoginUI = () => {
  return (
    <>
      <header>
        <img src="/thundertrade.svg" />
      </header>
      <main>
        <section>
          <label>Login</label>
        </section>
        <section>
          <img src="/id.png/" />
          <input type="text" />
        </section>
        <section>
          <img src="/password.png/" />
          <input type="password" />
        </section>
        <S.KeepLoginSection>
          <S.KeepLoginBtn>
            <CheckCircleOutlined />
          </S.KeepLoginBtn>
          <section>로그인 상태 유지</section>
        </S.KeepLoginSection>
        <section>
          <button>로그인</button>
        </section>
      </main>
      <footer>
        <S.FooterSection>
          <section>비밀번호 찾기</section>
          <span>|</span>
          <section>아이디 찾기</section>
          <span>|</span>
          <section>회원가입</section>
        </S.FooterSection>
      </footer>
    </>
  );
};

export default MarketLoginUI;
