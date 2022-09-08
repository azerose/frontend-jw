import { getDate } from "../../../commons/utils/utils";
import * as S from "../../../components/components/style/design";

const ListWriteUI = ({ onClickMoveCreate, data, onClickMoveDetail }) => {
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
      <S.CreateBtnWrapper>
        <S.CreateBtn onClick={onClickMoveCreate}>게시글 작성하기</S.CreateBtn>
      </S.CreateBtnWrapper>
    </S.Wrapper>
  );
};

export default ListWriteUI;
