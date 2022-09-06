import * as S from "../../src/board/components/components/style/design";

const List = () => {
  return (
    <S.Wrapper>
      <S.ListHeader>
        header
        <div class="title">
          베스트 게시글
          <S.BestPost>
            <div>게시물 제목입니다.</div>
            <div>게시물 제목입니다.</div>
            <div>게시물 제목입니다.</div>
            <div>게시물 제목입니다.</div>
          </S.BestPost>
        </div>
      </S.ListHeader>
      <div class="Main">main</div>
      <div class="footer">footer</div>
    </S.Wrapper>
  );
};

export default List;
