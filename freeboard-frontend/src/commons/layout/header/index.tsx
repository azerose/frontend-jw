import { useRouter } from "next/router";
import * as S from "../header/header.style";

const LayoutHeader = () => {
  const router = useRouter();

  const onClickHome = () => {
    router.push("/");
  };

  const onClickBoards = () => {
    router.push("/boards");
  };

  return (
    <>
      <S.HeaderWrapper>
        <img src="/thundertrade.svg/" onClick={onClickHome} />
        <S.SearchWrapper>
          <S.SearchInput placeholder="상품명,지역명,@상점명 입력" />
          <img src="/search.png/" />
        </S.SearchWrapper>
        <S.DivWrapper>
          <S.SellImg src="/sell.png/" onClick={onClickHome} />
          <S.SellDiv>판매하기</S.SellDiv>
        </S.DivWrapper>
        <S.DivWrapper>
          <S.SellImg src="/login.png/" />
          <S.SellDiv>내상점</S.SellDiv>
        </S.DivWrapper>
        <S.DivWrapper>
          <S.SellImg onClick={onClickBoards} src="/boards.png/" />
          <S.SellDiv onClick={onClickBoards}>게시판 가기</S.SellDiv>
        </S.DivWrapper>
      </S.HeaderWrapper>
    </>
  );
};

export default LayoutHeader;
