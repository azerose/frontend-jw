import { useRouter } from "next/router";
import * as S from "../header/header.style";

const LayoutHeader = () => {
  const router = useRouter();

  const onClickHome = () => {
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
        <div></div>
      </S.HeaderWrapper>
    </>
  );
};

export default LayoutHeader;
