import { useRouter } from "next/router";
import { useState } from "react";
import * as S from "../header/header.style";

const LayoutHeader = () => {
  const [change, setChange] = useState(false);
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
      <S.SellerCenterDiv>
        <S.CategoryImg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          viewBox="0 0 40 40"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,33.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <path
              d="M0 300 c0 -19 7 -20 200 -20 193 0 200 1 200 20 0 19 -7 20 -200 20
-193 0 -200 -1 -200 -20z"
            />
            <path
              d="M0 160 c0 -19 7 -20 200 -20 193 0 200 1 200 20 0 19 -7 20 -200 20
-193 0 -200 -1 -200 -20z"
            />
            <path
              d="M0 20 c0 -19 7 -20 200 -20 193 0 200 1 200 20 0 19 -7 20 -200 20
-193 0 -200 -1 -200 -20z"
            />
          </g>
        </S.CategoryImg>

        <S.SellerCenter>번개장터 판매자 센터</S.SellerCenter>
      </S.SellerCenterDiv>
    </>
  );
};

export default LayoutHeader;
