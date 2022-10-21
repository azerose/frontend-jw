import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, isTokenState } from "../../store";
import { IQuery } from "../../types/generated/types";
import * as S from "../header/header.style";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;

const LayoutHeader = () => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [change, setChange] = useState(false);
  const router = useRouter();

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const onClickHome = () => {
    router.push("/");
  };

  const onClickBoards = () => {
    router.push("/boards");
  };

  const onClickMyPage = () => {
    router.push("/Market/mypage");
  };

  const onClickMarket = () => {
    router.push("/Market/newproducts");
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
          {data ? `${data?.fetchUserLoggedIn.name}님 환영합니다.` : ""}
        </S.DivWrapper>
        <S.DivWrapper>
          <S.SellImg src="/sell.png/" onClick={onClickMarket} />
          <S.SellDiv onClick={onClickMarket}>판매하기</S.SellDiv>
        </S.DivWrapper>
        <S.DivWrapper>
          <S.SellImg src="/login.png/" onClick={onClickMyPage} />
          <S.SellDiv onClick={onClickMyPage}>내상점</S.SellDiv>
        </S.DivWrapper>
        <S.DivWrapper>
          <S.SellImg onClick={onClickBoards} src="/boards.png/" />
          <S.SellDiv onClick={onClickBoards}>게시판 가기</S.SellDiv>
        </S.DivWrapper>
      </S.HeaderWrapper>
      <S.SellerCenterDiv>
        <S.ImgDiv>
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
        </S.ImgDiv>
      </S.SellerCenterDiv>
    </>
  );
};

export default LayoutHeader;
