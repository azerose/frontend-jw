import * as S from "../style/design";

const BoardWriteUI = ({
  onChangeName,
  onChangePs,
  onChangeTitle,
  onChangeMain,
  onChangeLk,
  onChangeAdd,
  onChangeAddo,
  onChangeAddt,
  onClickSignUp,
  ner,
  per,
  ter,
  mer,
  aer,
  ater,
  ler,
  change,
}) => {
  return (
    <S.Wrapper>
      <S.Header>
        <h3>게시물 등록</h3>
      </S.Header>
      <S.Main>
        <S.Wrapper_id>
          <S.NamePasswordDiv>
            작성자
            <S.InputBox>
              <S.DefaultInput
                onChange={onChangeName}
                placeholder="이름을 적어주세요."
              />
              <S.Error>{ner}</S.Error>
            </S.InputBox>
          </S.NamePasswordDiv>
          <S.NamePasswordDiv>
            비밀번호
            <S.InputBox>
              <S.DefaultInput
                type="password"
                onChange={onChangePs}
                placeholder="비밀번호를 입력해 주세요."
              />
              <S.Error>{per}</S.Error>
            </S.InputBox>
          </S.NamePasswordDiv>
        </S.Wrapper_id>
        <S.WrapperDivide>
          제목
          <S.InputBox>
            <S.DefaultInput
              onChange={onChangeTitle}
              placeholder="제목을 작성해 주세요."
            />
            <S.Error>{ter}</S.Error>
          </S.InputBox>
        </S.WrapperDivide>
        <S.WrapperDivide>
          내용
          <S.InputBox>
            <S.SecInput
              onChange={onChangeMain}
              placeholder="내용을 작성해주세요."
            />
            <S.Error>{mer}</S.Error>
          </S.InputBox>
        </S.WrapperDivide>
        <S.WrapperDivide>
          주소
          <S.InputBox>
            <S.ThirdInput onChange={onChangeAdd} placeholder="07250" />
            <S.FirstButton>우편번호 검색</S.FirstButton>
            <S.Error>{aer}</S.Error>
          </S.InputBox>
          <S.InputBox>
            <S.DefaultInput onChange={onChangeAddo} />
          </S.InputBox>
          <S.InputBox>
            <S.DefaultInput onChange={onChangeAddt} />
            <S.Error>{ater}</S.Error>
          </S.InputBox>
        </S.WrapperDivide>
        <S.WrapperDivide>
          유튜브
          <S.InputBox>
            <S.DefaultInput
              onChange={onChangeLk}
              placeholder="링크를 작성해주세요."
            />
            <S.Error>{ler}</S.Error>
          </S.InputBox>
        </S.WrapperDivide>
        <S.WrapperDivide>
          사진 첨부
          <S.InputBox>
            <S.SecButton>+</S.SecButton>
            <S.SecButton>+</S.SecButton>
            <S.SecButton>+</S.SecButton>
          </S.InputBox>
        </S.WrapperDivide>
      </S.Main>
      <S.WrapperDivide>
        메인 설정
        <S.InputBox>
          <S.FourthInput type="radio" name="select" />
          유튜브
          <S.FourthInput type="radio" name="select" />
          사진
        </S.InputBox>
      </S.WrapperDivide>
      <S.Footer>
        <S.LastButton onClick={onClickSignUp} change={change}>
          등록하기
        </S.LastButton>
      </S.Footer>
    </S.Wrapper>
  );
};

export default BoardWriteUI;
