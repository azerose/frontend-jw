import WriteComment from "../../../../src/board/components/components/comment/comment.container";
import DetailPage from "../../../../src/board/components/components/detail/boardDetail.container";
import * as S from "../../../../src/board/components/components/style/design";

const DetailBoard = () => {
  return (
    <S.Img_Wrapper>
      <DetailPage />
      <WriteComment />
    </S.Img_Wrapper>
  );
};

export default DetailBoard;
