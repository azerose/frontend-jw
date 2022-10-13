import * as S from "../style/design";
import { IBoardWriteUI } from "./board.type";

const BoardWriteUI = ({
  onChangeName,
  onChangePs,
  onChangeTitle,
  onChangeMain,
  onChangeLk,
  onChangeAddt,
  onClickSignUp,
  onClickUpdate,
  onClickAddressSearch,
  onCompleteAddressSearch,
  onClickHandleCancel,
  onChangeFile,
  ner,
  per,
  ter,
  mer,
  ater,
  ler,
  change,
  isEdit,
  data,
  isOpen,
  add,
  addo,
  imgUrl,
}: IBoardWriteUI) => {
  console.log(imgUrl);
  return (
    <>
      {isOpen && (
        <S.AddressModal visible={true} onCancel={onClickHandleCancel}>
          <S.AddressSearchInput onComplete={onCompleteAddressSearch} />
        </S.AddressModal>
      )}
      <S.Wrapper>
        <S.Header>
          <h3>{isEdit ? "게시글 수정" : "게시글 등록"}</h3>
        </S.Header>
        <S.Main>
          <S.Wrapper_id>
            <S.NamePasswordDiv>
              작성자
              <S.InputBox>
                <S.DefaultInput
                  onChange={onChangeName}
                  placeholder="이름을 적어주세요."
                  defaultValue={data?.fetchBoard.writer || ""}
                  readOnly={!!data?.fetchBoard.writer}
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
                defaultValue={data?.fetchBoard.title}
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
                defaultValue={data?.fetchBoard.contents}
              />
              <S.Error>{mer}</S.Error>
            </S.InputBox>
          </S.WrapperDivide>
          <S.WrapperDivide>
            주소
            <S.InputBox>
              <S.ThirdInput
                placeholder="07250"
                readOnly
                value={add || data?.fetchBoard.boardAddress?.zipcode || ""}
              />
              <S.FirstButton onClick={onClickAddressSearch}>
                우편번호 검색
              </S.FirstButton>
            </S.InputBox>
            <S.InputBox>
              <S.DefaultInput
                readOnly
                value={addo || data?.fetchBoard.boardAddress?.address || ""}
              />
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
              {new Array(3).fill(3).map((_, index) => {
                return (
                  <>
                    {imgUrl[index] ? (
                      <S.SecButton
                        style={{
                          backgroundImage: `url(https://storage.googleapis.com/${imgUrl[index]})`,
                          backgroundColor: "#fff",
                          backgroundSize: "cover",
                        }}
                        key={index}
                        htmlFor={`file${index}`}
                      >
                        <S.ImageLink
                          type="file"
                          id={`file${index}`}
                          onChange={onChangeFile(index)}
                        />
                      </S.SecButton>
                    ) : (
                      <S.SecButton key={index} htmlFor={`file${index}`}>
                        +
                        <S.ImageLink
                          type="file"
                          id={`file${index}`}
                          onChange={onChangeFile(index)}
                        />
                      </S.SecButton>
                    )}
                  </>
                );
              })}
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
          <S.LastButton
            onClick={isEdit ? onClickUpdate : onClickSignUp}
            change={change}
          >
            {isEdit ? "수정하기" : "등록하기"}
          </S.LastButton>
        </S.Footer>
      </S.Wrapper>
    </>
  );
};

export default BoardWriteUI;
