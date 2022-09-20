import WriteComment from "../../../../src/board/components/components/comment/comment.contents/comment.container";
import WatchCommentList from "../../../../src/board/components/components/comment/comment.list/comment.list.container";
import DetailPage from "../../../../src/board/components/components/detail/boardDetail.container";
import * as S from "../../../../src/board/components/components/style/design";

const DetailBoard = () => {
  return (
    <S.Img_Wrapper>
      <DetailPage />
      <WriteComment />
      <WatchCommentList />
    </S.Img_Wrapper>
  );
};

export default DetailBoard;
