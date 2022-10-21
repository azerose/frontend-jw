import Script from "next/script";
import * as S from "./product.mypage.styles";
import { IMyPageWriteUI } from "./product.mypage.types";

const MyPageWriteUI = ({
  onClickCharge,
  onChangePoint,
  data,
}: IMyPageWriteUI) => {
  return (
    <>
      <Script
        type="text/javascript"
        src="https://code.jquery.com/jquery-1.12.4.min.js"
      ></Script>
      {/* iamport.payment.js */}
      <Script
        type="text/javascript"
        src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
      ></Script>
      <S.MainWrapper>
        <S.OptionWrapper>
          <S.PageNameWrapper>마이 페이지</S.PageNameWrapper>
          <S.ProfileWrapper>
            <img src="/profiler.png/" />
          </S.ProfileWrapper>
          <S.NameWrapper>이름</S.NameWrapper>
          <S.PointWrapper>
            <div>포인트</div>
            <S.PointStyle>
              {data ? data.fetchUserLoggedIn.userPoint?.amount : "0000"}
            </S.PointStyle>
            <S.ChargeWrapper>
              <div>
                충전금액:
                <input type="number" onChange={onChangePoint} />
              </div>
              <S.ChangeBtn onClick={onClickCharge}>충전</S.ChangeBtn>
            </S.ChargeWrapper>
          </S.PointWrapper>
        </S.OptionWrapper>
        <S.ListWrapper>
          <S.ListOptionWrapper>
            <div>내찜목록</div>
            <div>장바구니</div>
            <div>내가 등록한 상품</div>
          </S.ListOptionWrapper>
          <div>
            <div>
              <div>번호</div>
              <div>상품명</div>
              <div>판매가격</div>
              <div>날짜</div>
            </div>
          </div>
        </S.ListWrapper>
      </S.MainWrapper>
    </>
  );
};

export default MyPageWriteUI;
