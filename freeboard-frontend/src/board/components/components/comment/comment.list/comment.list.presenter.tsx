import { getDate } from "../../../../commons/utils/utils";
import * as St from "../../detail/boardDetail.styles";
import { Rate } from "antd";
import { ICommentListUI } from "./comment.list.types";

const CommentListUI = ({ data, onClickDeleteComment }: ICommentListUI) => {
  return (
    <>
      <St.CommentWatchBox>
        {data?.fetchBoardComments.map((el) => (
          <St.CommentRow>
            <div>
              <St.CommentWriter>작성자 : {el.writer}</St.CommentWriter>
              <St.DeleteBtn id={el._id} onClick={onClickDeleteComment}>
                <img src="/delete.png" />
              </St.DeleteBtn>
            </div>
            <div>
              <Rate disabled value={el.rating} />
            </div>
            <St.CommentContents>내용 :{el.contents}</St.CommentContents>
            <St.CommentDate>날짜: {getDate(el.createdAt)}</St.CommentDate>
          </St.CommentRow>
        ))}
      </St.CommentWatchBox>
    </>
  );
};

export default CommentListUI;
