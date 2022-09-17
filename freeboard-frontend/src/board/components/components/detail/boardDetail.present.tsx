import * as S from "../style/design";
import { IBoardDetailWriteUI } from "./boardDetail.type";
import ReactPlayer from "react-player";

const BoardDetailWriteUI = ({
  onClickMoveList,
  onClickMoveEdit,
  onClickDisLike,
  onClickLike,
  data,
}: IBoardDetailWriteUI) => {
  return (
    <S.BigWrapper>
      <S.Wrapper>
        <S.Profile>
          <S.Profile_Id>
            <img src="/profile.png" />
            <S.Name_Date>
              <S.Name>{data ? data.fetchBoard.writer : "로딩중입니다"}</S.Name>
              <S.Date>
                Date :&nbsp;
                {data ? data.fetchBoard.createdAt.slice(0, 10) : "로딩중입니다"}
              </S.Date>
            </S.Name_Date>
          </S.Profile_Id>
          <S.Image>
            <img src="/link.png" />
            <img src="/location.png" />
          </S.Image>
          <S.Location>
            {data?.fetchBoard.boardAddress?.address}
            <S.Triangle></S.Triangle>
          </S.Location>
        </S.Profile>
        <S.Main>
          <S.Title>{data ? data.fetchBoard.title : "로딩중입니다.."}</S.Title>
          <img src="/image.png" />
          <S.Content>
            {data ? data.fetchBoard.contents : "로딩중입니당..."}
          </S.Content>
          <S.LinkWrapper>
            <ReactPlayer url={String(data?.fetchBoard.youtubeUrl)} />
          </S.LinkWrapper>
        </S.Main>
        <S.Footer_Wrapper>
          <S.Img_Wrapper>
            <S.Like_Btn onClick={onClickLike}>
              <img src="/like.png" />
            </S.Like_Btn>
            <S.Like_Count>
              {data ? data.fetchBoard.likeCount : "로딩중입니다.."}
            </S.Like_Count>
          </S.Img_Wrapper>
          <S.Img_Wrapper>
            <S.Like_Btn onClick={onClickDisLike}>
              <img src="/hate.png" />
            </S.Like_Btn>
            <S.Hate_Count>
              {data ? data.fetchBoard.dislikeCount : "로딩중입니다.."}
            </S.Hate_Count>
          </S.Img_Wrapper>
        </S.Footer_Wrapper>
      </S.Wrapper>
      <S.EditBtnBox>
        <S.EditWrapper>
          <S.ChangeBtn onClick={onClickMoveList}>목록</S.ChangeBtn>
          <S.ChangeBtn onClick={onClickMoveEdit}>수정</S.ChangeBtn>
        </S.EditWrapper>
      </S.EditBtnBox>
    </S.BigWrapper>
  );
};

export default BoardDetailWriteUI;
