import * as St from "../../detail/boardDetail.styles";
import { IWriteCommentUI } from "./comment.type";
import { Rate } from "antd";

const WriteCommentUI = ({
  onChangeComment,
  rating,
  onChangeWriter,
  onClickCreateComment,
  onChangeCommentPassword,
  onChangeRating,
  writer,
  pw,
  comment,
}: IWriteCommentUI) => {
  return (
    <>
      <St.Commentbox>
        <St.Comment>댓글</St.Comment>
        <div>
          <St.WriterInput
            placeholder="작성자를 입력해 주세요"
            onChange={onChangeWriter}
            value={writer}
          />
          <St.PasswordInput
            type="password"
            placeholder="비밀번호"
            onChange={onChangeCommentPassword}
            value={pw}
          />
        </div>
        <div>
          <Rate onChange={onChangeRating} value={rating} />
        </div>
        <St.Textarea
          placeholder="개인정보 쏼라쏼라"
          onChange={onChangeComment}
          maxLength={500}
          value={comment}
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
    </>
  );
};

export default WriteCommentUI;
