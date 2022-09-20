import { getDate } from "../../../commons/utils/utils";
import * as S from "../style/design";
import { IListWriteUI } from "./boardList.type";

const ListWriteUI = ({
  onClickMoveCreate,
  data,
  lastPage,
  startPage,
  onClickMoveDetail,
  onClickNextPage,
  onClickPrevPage,
  onClickPage,
  isChange,
}: IListWriteUI) => {
  return (
    <S.Wrapper>
      <S.ListHeader>
        <S.BestPostTitle>베스트 게시글</S.BestPostTitle>
        <S.BestPost>
          <S.BestPostContents>
            <S.BestPostImg></S.BestPostImg>
            <div> 게시물 제목입니다.</div>
            <div className="bestBox"></div>
          </S.BestPostContents>
        </S.BestPost>
      </S.ListHeader>
      <S.ListTitle>
        <div>순서</div>
        <div>제목</div>
        <div>내용</div>
        <div>작성자</div>
        <div>날짜</div>
      </S.ListTitle>
      <S.ListWrapper>
        {data?.fetchBoards.map((el, index) => (
          <S.Row key={el._id}>
            <S.Column id={el._id} onClick={onClickMoveDetail}>
              {index + 1}
            </S.Column>
            <S.Column id={el._id} onClick={onClickMoveDetail}>
              {el.title}
            </S.Column>
            <S.Column id={el._id} onClick={onClickMoveDetail}>
              {el.contents}
            </S.Column>
            <S.Column id={el._id} onClick={onClickMoveDetail}>
              {el.writer}
            </S.Column>
            <S.Column id={el._id} onClick={onClickMoveDetail}>
              {getDate(el.createdAt)}
            </S.Column>
          </S.Row>
        ))}
      </S.ListWrapper>
      <S.PageChagnerWrapper>
        <S.PageChanger onClick={onClickPrevPage}>
          <S.PrevImg src="/nextpage.png" />
        </S.PageChanger>
        {new Array(10).fill(1).map(
          (_, index) =>
            index + startPage <= lastPage && (
              <S.Span
                key={index + startPage}
                id={String(index + startPage)}
                onClick={onClickPage}
                style={{ margin: "10px" }}
                isChange={Number(isChange === index + startPage)}
              >
                {index + startPage}
              </S.Span>
            )
        )}
        <S.PageChanger onClick={onClickNextPage}>
          <S.Nextimg src="/nextpage.png" />
        </S.PageChanger>
      </S.PageChagnerWrapper>
      <S.CreateBtnWrapper>
        <S.CreateBtn onClick={onClickMoveCreate}>게시글 작성하기</S.CreateBtn>
      </S.CreateBtnWrapper>
    </S.Wrapper>
  );
};

export default ListWriteUI;
