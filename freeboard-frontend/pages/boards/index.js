import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "../../src/board/components/components/detail/boardDetail.query";
import * as S from "../../src/board/components/components/style/design";

const List = () => {
  const { data } = useQuery(FETCH_BOARDS);
  console.log(data?.fetchBoards);
  return (
    <S.Wrapper>
      <S.ListHeader>
        <S.BestPostTitle>베스트 게시글</S.BestPostTitle>
        <S.BestPost>
          <S.BestPostContents>
            <S.BestPostImg></S.BestPostImg>
            <div> 게시물 제목입니다.</div>
            <div className="bestBox">s</div>
          </S.BestPostContents>
        </S.BestPost>
      </S.ListHeader>
      <S.ListTitle>
        <div>순서</div>
        <div>제목</div>
        <div>내용</div>
        <div>체크</div>
        <div>삭제하기</div>
      </S.ListTitle>
      <S.ListWrapper>
        {data?.fetchBoards.map((el, index) => (
          <S.Row key={el._id}>
            <S.Column>{index + 1}</S.Column>
            <S.Column>{el.title}</S.Column>
            <S.Column>{el.contents}</S.Column>
            <S.Column>
              <input type="checkbox" />
            </S.Column>
            <S.Column>
              <button id={el._id}>삭제</button>
            </S.Column>
          </S.Row>
        ))}
      </S.ListWrapper>
      <div className="footer">footer</div>
    </S.Wrapper>
  );
};

export default List;
