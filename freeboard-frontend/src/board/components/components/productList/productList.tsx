import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import InfiniteScroll from "react-infinite-scroller";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import { getDate } from "../../../commons/utils/utils";
import { FETCH_USEDITEMS } from "./productList.queries";
import * as S from "./productLIst.styles";

const ProductListWrite = () => {
  const router = useRouter();
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USEDITEMS, {
    fetchPolicy: "cache-and-network",
  });

  const onLoadMore = () => {
    if (data === undefined) return;
    void fetchMore({
      variables: { page: Math.ceil(data.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditems === undefined) {
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        }
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  const onClickMoveDetail = (event: MouseEvent<HTMLDivElement>) => {
    void router.push(`/Market/detail/${event.currentTarget.id}`);
  };

  return (
    <>
      <S.WholeWrapper>
        <h2>오늘의 상품 추천</h2>
        <InfiniteScroll pageStart={0} hasMore={true} loadMore={onLoadMore}>
          <S.ProductWrapper>
            {data?.fetchUseditems.map((el) => (
              <S.MainWrapper key={el._id}>
                <S.ImgWrapper>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={`https://storage.googleapis.com/${el.images[0]}`}
                  />
                </S.ImgWrapper>
                <S.ProductInfoWrapper>
                  <S.ProductInfoName id={el._id} onClick={onClickMoveDetail}>
                    {el.name}
                  </S.ProductInfoName>
                  <S.ProductInfoPriceWrapper>
                    <S.ProductPrice id={el._id} onClick={onClickMoveDetail}>
                      {el.price}원
                    </S.ProductPrice>
                    <S.EnrollTime id={el._id} onClick={onClickMoveDetail}>
                      {getDate(el.createdAt)}
                    </S.EnrollTime>
                  </S.ProductInfoPriceWrapper>
                </S.ProductInfoWrapper>
              </S.MainWrapper>
            ))}
          </S.ProductWrapper>
        </InfiniteScroll>
      </S.WholeWrapper>
    </>
  );
};

export default ProductListWrite;
