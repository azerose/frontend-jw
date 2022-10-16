import { getDate } from "../../../../commons/utils/utils";
import * as St from "../../detail/boardDetail.styles";
import { IRepleListWriteUI } from "./comment.product.replelist.types";

const RepleListWriteUI = ({
  el,
  onSaveCommentId,
  isOpen,
  onClickDelete,
  onClickModalCancel,
  getSaveId,
  onClickEdit,
  onShowComment,
  onUpdateComment,
  onChangeContents,
}: IRepleListWriteUI) => {
  return (
    <>
      {isOpen && (
        <St.PasswordModal
          visible={true}
          onOk={onClickDelete}
          onCancel={onClickModalCancel}
        >
          <div>답글을 삭제하시겠습니까?</div>
        </St.PasswordModal>
      )}
      <St.RepleDiv>
        <St.CommentRow>
          <div>
            {console.log(el.id)}
            <St.CommentWriter>{el.user.name}</St.CommentWriter>
            <div>
              <St.DeleteBtn id={el._id} onClick={onSaveCommentId}>
                <img src="/delete.png" />
              </St.DeleteBtn>
              <St.UpdateBtn id={el._id} onClick={onShowComment}>
                <img src="/update.png" />
              </St.UpdateBtn>
            </div>
          </div>
          <St.CommentContents>내용 :{el.contents}</St.CommentContents>
          <St.CommentDate>날짜: {getDate(el.createdAt)}</St.CommentDate>
        </St.CommentRow>
        {onUpdateComment && getSaveId === el._id ? (
          <St.Commentbox>
            <St.Comment>문의하기</St.Comment>
            <St.Textarea
              placeholder="개인정보 쏼라쏼라"
              maxLength={500}
              onChange={onChangeContents}
              name="contents"
              defaultValue={el.contents}
            ></St.Textarea>
            <div>
              <St.CommentCount>
                <St.CommentEnroll onClick={onClickEdit}>
                  수정하기
                </St.CommentEnroll>
              </St.CommentCount>
            </div>
          </St.Commentbox>
        ) : null}
      </St.RepleDiv>
    </>
  );
};

export default RepleListWriteUI;
