import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroller";
import WriteComment from "../../../../src/board/components/components/comment/comment.contents/comment.container";
import { FETCH_USEDITEM_QUESTIONS } from "../../../../src/board/components/components/comment/comment.contents/comment.queries";
import ProductCommentListWrite from "../../../../src/board/components/components/comment/comment.product.list/comment.product.list.container";
import ProductDetailWrite from "../../../../src/board/components/components/productdetail/product.detail.container";
import {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../src/commons/types/generated/types";

const ProductDetail = () => {
  const router = useRouter();
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USEDITEM_QUESTIONS, {
    variables: {
      useditemId: String(router.query.id),
    },
  });

  const onChangeLoadmore = () => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1,
        useditemId: String(router.query.id),
      },
      updateQuery: (prev: any, { fetchMoreResult }: any) => {
        if (fetchMoreResult.fetchUseditemQuestions === undefined) {
          return {
            fetchUseditemQuestions: [...prev.fetchUseditemQuestions],
          };
        }
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  return (
    <>
      <ProductDetailWrite />
      <WriteComment isMarket={true} />
      <InfiniteScroll
        pageStart={0}
        loadMore={onChangeLoadmore}
        hasMore={true || false}
      >
        {data?.fetchUseditemQuestions.map((el) => (
          <ProductCommentListWrite el={el} fetchMore={fetchMore} data={data} />
        ))}
      </InfiniteScroll>
    </>
  );
};

export default ProductDetail;
