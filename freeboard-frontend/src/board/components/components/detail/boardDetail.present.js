import * as S from "../style/design";

const BoardDetailWriteUI = ({ onClickDisLike, onClickLike, data }) => {
  return (
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
          {data?.fetchBoard.boardAddress.address}
          <S.Triangle></S.Triangle>
        </S.Location>
      </S.Profile>
      <S.Main>
        <S.Title>{data ? data.fetchBoard.title : "로딩중입니다.."}</S.Title>
        <img src="/image.png" />
        <S.Content>
          {data ? data.fetchBoard.contents : "로딩중입니당..."}
        </S.Content>
        <S.Link src={data ? data.fetchBoard.youtubeUrl : "링크를 넣으세요"} />
      </S.Main>
      <S.Footer_Wrapper>
        <S.Img_Wrapper>
          <S.Like_Btn onClickLike={onClickLike}>
            <img src="/like.png" />
          </S.Like_Btn>
          <S.Like_Count>
            {data ? data.fetchBoard.likeCount : "로딩중입니다.."}
          </S.Like_Count>
        </S.Img_Wrapper>
        <S.Img_Wrapper>
          <S.Like_Btn onClickDisLike={onClickDisLike}>
            <img src="/hate.png" />
          </S.Like_Btn>
          <S.Hate_Count>
            {data ? data.fetchBoard.dislikeCount : "로딩중입니다.."}
          </S.Hate_Count>
        </S.Img_Wrapper>
      </S.Footer_Wrapper>
    </S.Wrapper>
  );
};

export default BoardDetailWriteUI;
