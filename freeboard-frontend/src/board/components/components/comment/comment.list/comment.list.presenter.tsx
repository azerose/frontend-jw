import { getDate } from "../../../../commons/utils/utils";
import * as St from "../../detail/boardDetail.styles";
import { Rate } from "antd";
import { ICommentListUI } from "./comment.list.types";

const CommentListUI = ({
  data,
  onChangeWriter,
  onChangePassword,
  onChangeContents,
  onClickDeleteComment,
  commentEditOnchange,
  onSaveCommentId,
  onUpdateComment,
  onShowComment,
  onClickModalCancel,
  getSaveId,
  isOpen,
  onChangeInputPassword,
}: ICommentListUI) => {
  return (
    <>
      {isOpen && (
        <St.PasswordModal
          visible={true}
          onOk={onClickDeleteComment}
          onCancel={onClickModalCancel}
        >
          <div>비밀번호를 입력해 주세요!!</div>
          <St.InputPassword onChange={onChangeInputPassword} />
        </St.PasswordModal>
      )}
      <St.CommentWatchBox>
        {data?.fetchBoardComments.map((el) => (
          <>
            <St.CommentRow>
              <div>
                <St.CommentWriter>작성자 : {el.writer}</St.CommentWriter>
                <div>
                  <St.DeleteBtn id={el._id} onClick={onSaveCommentId}>
                    <img src="/delete.png" />
                  </St.DeleteBtn>
                  <St.UpdateBtn id={el._id} onClick={onShowComment}>
                    <img src="/update.png" />
                  </St.UpdateBtn>
                </div>
              </div>
              <div>
                <Rate disabled value={el.rating} />
              </div>
              <St.CommentContents>내용 :{el.contents}</St.CommentContents>
              <St.CommentDate>날짜: {getDate(el.createdAt)}</St.CommentDate>
            </St.CommentRow>
            {onUpdateComment && getSaveId === el._id ? (
              <St.Commentbox>
                <St.Comment>댓글</St.Comment>
                <div>
                  <St.WriterInput
                    placeholder="작성자를 입력해 주세요"
                    name="writer"
                    onChange={onChangeWriter}
                  />
                  <St.PasswordInput
                    type="password"
                    placeholder="비밀번호"
                    name="password"
                    onChange={onChangePassword}
                  />
                </div>
                <div>
                  <Rate />
                </div>
                <St.Textarea
                  placeholder="개인정보 쏼라쏼라"
                  maxLength={500}
                  onChange={onChangeContents}
                  name="contents"
                ></St.Textarea>
                <div>
                  <St.CommentCount>
                    <St.CommentEnroll onClick={commentEditOnchange}>
                      수정하기
                    </St.CommentEnroll>
                  </St.CommentCount>
                </div>
              </St.Commentbox>
            ) : null}
          </>
        ))}
      </St.CommentWatchBox>
    </>
  );
};

export default CommentListUI;
