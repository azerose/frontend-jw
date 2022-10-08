import { CheckCircleOutlined } from "@ant-design/icons";
import { ChangeEvent, useState } from "react";
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
              <S.RemarksInput type="text" />
            </S.ProductTitleWrapper>
          </div>
          <S.ProductTitleWrapper>
            <S.ProductInfo>판매자명</S.ProductInfo>
            <S.SellerInput type="text" />
          </S.ProductTitleWrapper>
          <S.AddressWrapper>
            <S.ProductInfo>거래지역</S.ProductInfo>
            <S.AddressBtnWrapper>
              <S.AddressBtn onClick={onClickaddressSearch}>
                주소 검색
              </S.AddressBtn>
              <S.AddressInput type="text" />
            </S.AddressBtnWrapper>
          </S.AddressWrapper>
          <div>
            <S.ProductTitleWrapper>
              <S.ProductInfo>상태</S.ProductInfo>
              <div>
                <input type="radio" name="condition" />
                <label>중고상품</label>
                <input type="radio" name="condition" />
                <label>새상품</label>
              </div>
            </S.ProductTitleWrapper>
            <S.ProductTitleWrapper>
              <S.ProductInfo>교환</S.ProductInfo>
              <div>
                <input type="radio" name="exChange" />
                <label>교환불가</label>
                <input type="radio" name="exChange" />
                <label>교환가능</label>
              </div>
            </S.ProductTitleWrapper>
            <S.ProductTitleWrapper>
              <S.ProductInfo>가격</S.ProductInfo>
              <div>
                <input type="text" />
                <div>원</div>
              </div>
              <div>
                <CheckCircleOutlined /> 배송비 포함
              </div>
            </S.ProductTitleWrapper>
            <S.ProductTitleWrapper>
              <S.ProductInfo>설명</S.ProductInfo>
              <input type="text" />
            </S.ProductTitleWrapper>
            <S.ProductTitleWrapper>
              <S.ProductInfo>연관태그</S.ProductInfo>
              <input type="text" />
            </S.ProductTitleWrapper>
            <S.ProductTitleWrapper>
              <S.ProductInfo>수량</S.ProductInfo>
              <input type="text" />개
            </S.ProductTitleWrapper>
          </div>
        </S.MainWrapper>
      </S.MainForm>
    </>
  );
};

export default EnrollProductUI;
