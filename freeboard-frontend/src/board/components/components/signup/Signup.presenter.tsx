import * as S from "./Signup.Style";
import { ISignUpPageUI } from "./Signup.type";

const SignUpPageUI = ({
  onChangeEmail,
  onChangePassword,
  onChangePasswrodConfirm,
  onClickSignUp,
  onChangeName,
}: ISignUpPageUI) => {
  return (
    <>
      <S.MainWrapper>
        <S.HeaderWrapper>
          <img src="/thundertrade.svg/" />
        </S.HeaderWrapper>
        <S.MainSectionWrapper>
          <S.InputWrapper>
            <S.LabelStyle>아이디</S.LabelStyle>
            <S.InputBox>
              <S.InputStyle type="text" onChange={onChangeEmail} />
            </S.InputBox>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.LabelStyle>비밀번호</S.LabelStyle>
            <S.InputBox>
              <S.InputStyle type="password" onChange={onChangePassword} />
            </S.InputBox>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.LabelStyle>비밀번호 확인</S.LabelStyle>
            <S.InputBox>
              <S.InputStyle
                type="password"
                onChange={onChangePasswrodConfirm}
              />
            </S.InputBox>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.LabelStyle>이름</S.LabelStyle>
            <S.InputBox>
              <S.InputStyle type="text" onChange={onChangeName} />
            </S.InputBox>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.LabelStyle>생년월일</S.LabelStyle>
            <S.InputBox>
              <S.InputStyle type="date" />
            </S.InputBox>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.LabelStyle>성별</S.LabelStyle>
            <S.GenderSection>
              <S.GenderDiv>
                남<input type="radio" name="gender" />
              </S.GenderDiv>
              <S.GenderDiv>
                여<input type="radio" name="gender" />
              </S.GenderDiv>
            </S.GenderSection>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.LabelStyle>휴대전화</S.LabelStyle>
            <S.PhoneWrapper>
              <S.ConfrimBox>
                <S.InputStyle type="text" placeholder="전화번호 입력" />
              </S.ConfrimBox>
              <S.ConfirmBtn>인증번호 받기</S.ConfirmBtn>
            </S.PhoneWrapper>
            <S.InputBox>
              <S.InputStyle type="text" />
            </S.InputBox>
          </S.InputWrapper>
        </S.MainSectionWrapper>
        <S.FooterWrapper>
          <S.SignUpBtn onClick={onClickSignUp}>가입하기</S.SignUpBtn>
        </S.FooterWrapper>
      </S.MainWrapper>
    </>
  );
};

export default SignUpPageUI;
