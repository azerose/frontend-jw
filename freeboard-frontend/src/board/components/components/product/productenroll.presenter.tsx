import * as S from "./productenroll.styles";
import { IEnrollProductUI } from "./productenroll.types";

const EnrollProductUI = ({
  isOpen,
  onSubmitEnroll,
  register,
  onClickHandleCancel,
  onCompleteAddressSearch,
  handleSubmit,
  onClickaddressSearch,
}: IEnrollProductUI) => {
  return (
    <>
      {isOpen && (
        <S.AddressModal visible={true} onCancel={onClickHandleCancel}>
          <S.AddressSearchInput onComplete={onCompleteAddressSearch} />
        </S.AddressModal>
      )}
      <S.MainForm onSubmit={handleSubmit(onSubmitEnroll)}>
        <S.MainWrapper>
          <S.ProductInfoWrapper>
            <S.ProductInfo>상품이미지</S.ProductInfo>
            <div>
              <input type="file" />
            </div>
          </S.ProductInfoWrapper>
          <div>
            <S.ProductTitleWrapper>
              <S.ProductInfo>제목</S.ProductInfo>
              <S.ProductTitleInput
                type="text"
                placeholder="상품 제목을 입력해주세요."
                maxLength={40}
                {...register("name")}
              />
            </S.ProductTitleWrapper>
          </div>
          <div>
            <S.ProductTitleWrapper>
              <S.ProductInfo>한줄요약</S.ProductInfo>
              <S.RemarksInput type="text" {...register("remarks")} />
            </S.ProductTitleWrapper>
          </div>
          <S.ProductTitleWrapper>
            <S.ProductInfo>판매자명</S.ProductInfo>
            <S.SellerInput type="text" {...register("seller")} />
          </S.ProductTitleWrapper>
          <S.AddressWrapper>
            <S.ProductInfo>거래지역</S.ProductInfo>
            <S.AddressBtnWrapper>
              <S.AddressBtn onClick={onClickaddressSearch}>
                주소 검색
              </S.AddressBtn>
              <S.AddressInput
                type="text"
                {...register("useditemAddress.address")}
              />
            </S.AddressBtnWrapper>
          </S.AddressWrapper>
          <div>
            <S.ProductTitleWrapper>
              <S.ProductInfo>상태</S.ProductInfo>
              <S.ConditionWrapper>
                <input type="radio" name="condition" />
                <S.ProductLabel>중고상품</S.ProductLabel>
                <input type="radio" name="condition" />
                <S.ProductLabel>새상품</S.ProductLabel>
              </S.ConditionWrapper>
            </S.ProductTitleWrapper>
            <S.ProductTitleWrapper>
              <S.ProductInfo>교환</S.ProductInfo>
              <S.ConditionWrapper>
                <input type="radio" name="exChange" />
                <S.ProductLabel>교환불가</S.ProductLabel>
                <input type="radio" name="exChange" />
                <S.ProductLabel>교환가능</S.ProductLabel>
              </S.ConditionWrapper>
            </S.ProductTitleWrapper>
            <S.ProductTitleWrapper>
              <S.ProductInfo>가격</S.ProductInfo>
              <S.PriceWrapper>
                <S.PriceInput type="text" {...register("price")} />원
                <S.OutLineStyle /> 배송비 포함
              </S.PriceWrapper>
            </S.ProductTitleWrapper>
            <S.ProductTitleWrapper>
              <S.ProductInfo>설명</S.ProductInfo>
              <S.ContentsArea
                placeholder="상품 설명을 입력해주세요"
                {...register("contents")}
              />
            </S.ProductTitleWrapper>
            <S.ProductTitleWrapper>
              <S.ProductInfo>연관태그</S.ProductInfo>
              <S.TagInput type="text" {...register("tags")} />
            </S.ProductTitleWrapper>
            <S.ProductTitleWrapper>
              <S.ProductInfo>수량</S.ProductInfo>
              <S.CountInput
                type="text"
                placeholder="갯수를 입력해주세요"
                {...register("pickedCount")}
              />
              개
            </S.ProductTitleWrapper>
            <S.EnrollBtnWrapper>
              <S.EnrollBtn type="submit">상품등록</S.EnrollBtn>
            </S.EnrollBtnWrapper>
          </div>
        </S.MainWrapper>
      </S.MainForm>
    </>
  );
};

export default EnrollProductUI;
