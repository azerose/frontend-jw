import * as St from "../detail/boardDetail.styles";
import { getDate } from "../../../commons/utils/utils";
import { IWriteCommentUI } from "./comment.type";

const WriteCommentUI = ({
  onChangeComment,
  data,
  comment,
  onChangeWriter,
  onClickCreateComment,
  onClickDeleteComment,
  onChangeCommentPassword,
}: IWriteCommentUI) => {
  return (
    <>
      <St.Commentbox>
        <St.Comment>댓글</St.Comment>
        <div>
          <St.WriterInput
            placeholder="작성자를 입력해 주세요"
            onChange={onChangeWriter}
          />
          <St.PasswordInput
            type="password"
            placeholder="비밀번호"
            onChange={onChangeCommentPassword}
          />
        </div>
        <div>
          <img src="/Star.png" />
        </div>
        <St.Textarea
          placeholder="개인정보 쏼라쏼라"
          onChange={onChangeComment}
          maxLength={500}
        ></St.Textarea>
        <div>
          <St.CommentCount>
            {comment.length}/500
            <St.CommentEnroll onClick={onClickCreateComment}>
              등록하기
            </St.CommentEnroll>
          </St.CommentCount>
        </div>
      </St.Commentbox>
      <St.CommentWatchBox>
        {data?.fetchBoardComments.map((el) => (
          <St.CommentRow>
            <div>
              <St.CommentWriter>작성자 : {el.writer}</St.CommentWriter>
              <St.DeleteBtn id={el._id} onClick={onClickDeleteComment}>
                <img src="/delete.png" />
              </St.DeleteBtn>
            </div>
            <St.CommentContents>내용 :{el.contents}</St.CommentContents>
            <St.CommentDate>날짜: {getDate(el.createdAt)}</St.CommentDate>
          </St.CommentRow>
        ))}
      </St.CommentWatchBox>
    </>
  );
};

export default WriteCommentUI;
