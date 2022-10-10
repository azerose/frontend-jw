import { IProductDetailWriteUI } from "./product.detail.types";

const ProductDetailWriteUI = ({ data }: IProductDetailWriteUI) => {
  return (
    <>
      <div>
        <div>
          <img />
        </div>
        <div>
          <div>{data ? data?.fetchUseditem.name : "로딩중"}</div>
          <div>한줄소개</div>
          <div>가격</div>
          <div>찜개수</div>
          <div>등록시간</div>
          <div>상품정보</div>
          <div>상품태그</div>
          <div>거래장소</div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailWriteUI;
