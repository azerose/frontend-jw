import { IProductDetailWriteUI } from "./product.detail.types";
import * as S from "./product.detail.styles";
import KakaoMap from "../../../../commons/modal/kakaomap";

const ProductDetailWriteUI = ({
  data,
  onClickDelete,
}: IProductDetailWriteUI) => {
  return (
    <>
      <S.MainWrapper>
        <S.ImgContentsWrapper>
          <S.ImgWrapper>
            {data?.fetchUseditem.images?.map((el) =>
              el ? (
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ) : (
                <div />
              )
            )}
          </S.ImgWrapper>

          <S.TextWrapper>
            <S.TitleMainWrapper>
              <S.titleWrapper>
                {data ? data?.fetchUseditem.name : "로딩중"}
              </S.titleWrapper>
              <S.PriceWrappaer>{data?.fetchUseditem.price}원</S.PriceWrappaer>
            </S.TitleMainWrapper>
            <S.TitleContentsWrapper>
              <S.TextContentsWrapper>
                <S.TextStyle>-한줄요약:</S.TextStyle>
                <div>{data ? data.fetchUseditem.remarks : "로딩"}</div>
              </S.TextContentsWrapper>
              <S.TextContentsWrapper>
                <S.TextStyle>-찜개수:</S.TextStyle>
                <div>{data?.fetchUseditem.pickedCount}</div>
              </S.TextContentsWrapper>
              <S.TextContentsWrapper>
                <S.TextStyle>-등록시간:</S.TextStyle>
                <div>{data?.fetchUseditem.createdAt.slice(0, 10)}</div>
              </S.TextContentsWrapper>
              <S.TextContentsWrapper>
                <S.TextStyle>-상품정보:</S.TextStyle>
                <div>{data?.fetchUseditem.contents}</div>
              </S.TextContentsWrapper>
              <S.TextContentsWrapper>
                <S.TextStyle>-태그:</S.TextStyle>
                <div>{data?.fetchUseditem.tags}</div>
              </S.TextContentsWrapper>
            </S.TitleContentsWrapper>
          </S.TextWrapper>
        </S.ImgContentsWrapper>

        <S.TitleBottomWrapper>
          <S.ImgWrapper>
            <KakaoMap />
          </S.ImgWrapper>
          <S.TextWrapper>
            <S.TextContentsWrapper>
              <S.TextStyle>-주소:</S.TextStyle>
              <div>{data?.fetchUseditem.useditemAddress?.address}</div>
            </S.TextContentsWrapper>
            <S.TextContentsWrapper>
              <S.TextStyle>-위도:</S.TextStyle>
              <div>{data?.fetchUseditem.useditemAddress?.lat}</div>
            </S.TextContentsWrapper>
            <S.TextContentsWrapper>
              <S.TextStyle>-경도:</S.TextStyle>
              <div>{data?.fetchUseditem.useditemAddress?.lng}</div>
            </S.TextContentsWrapper>
          </S.TextWrapper>
        </S.TitleBottomWrapper>
      </S.MainWrapper>
      <S.MutationBtnWrapper>
        <S.MutationBtn onClick={onClickDelete}>글 삭제하기</S.MutationBtn>
        <S.MutationBtn>글 수정하기</S.MutationBtn>
      </S.MutationBtnWrapper>
    </>
  );
};

export default ProductDetailWriteUI;
