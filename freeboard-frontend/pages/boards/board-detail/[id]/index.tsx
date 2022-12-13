import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroller";
import WriteComment from "../../../../src/board/components/components/comment/comment.contents/comment.container";
import WatchCommentList from "../../../../src/board/components/components/comment/comment.list/comment.list.container";
import DetailPage from "../../../../src/board/components/components/detail/boardDetail.container";
import { FETCH_BOARD_COMMENTS } from "../../../../src/board/components/components/detail/boardDetail.query";
import * as S from "../../../../src/board/components/components/style/design";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../src/commons/types/generated/types";

const DetailBoard = () => {
  const router = useRouter();

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: String(router.query.id),
    },
  });

  const onChangeLoadmore = () => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil(data?.fetchBoardComments.length / 10) + 1,
        boardId: String(router.query.id),
      },
      updateQuery: (prev: any, { fetchMoreResult }: any) => {
        if (fetchMoreResult.fetchBoardComments === undefined) {
          return {
            fetchBoardComments: [...prev.fetchBoardComments],
          };
        }
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return (
    <S.Img_Wrapper>
      <DetailPage />
      <WriteComment isMarket={false} />
      <InfiniteScroll
        pageStart={0}
        loadMore={onChangeLoadmore}
        hasMore={true || false}
      >
        {data?.fetchBoardComments.map((el) => {
          return <WatchCommentList el={el} fetchMore={fetchMore} data={data} />;
        })}
      </InfiniteScroll>
    </S.Img_Wrapper>
  );
};

export default DetailBoard;
