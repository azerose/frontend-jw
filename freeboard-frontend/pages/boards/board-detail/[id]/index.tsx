import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
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

  return (
    <S.Img_Wrapper>
      <DetailPage />
      <WriteComment />
      {data?.fetchBoardComments.map((el) => {
        return <WatchCommentList el={el} fetchMore={fetchMore} data={data} />;
      })}
    </S.Img_Wrapper>
  );
};

export default DetailBoard;
