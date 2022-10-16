import { getDate } from "../../../../commons/utils/utils";
import * as St from "../../detail/boardDetail.styles";
import RepleListWrite from "../comment.product.replelist/comment.product.replelist.container";
import { IProductCommentListUI } from "./comment.product.list.types";

const ProductCommentListUI = ({
  el,
  isOpen,
  onClickDeleteComment,
  onSaveCommentId,
  onClickModalCancel,
  onChangeContents,
  onShowComment,
  onUpdateComment,
  onClickEdit,
  getSaveId,
  onClickReple,
  onReple,
  onClickAddReple,
}: IProductCommentListUI) => {
  return (
    <>
      {isOpen && (
        <St.PasswordModal
          visible={true}
          onOk={onClickDeleteComment}
          onCancel={onClickModalCancel}
        >
          <div>문의를 삭제하시겠습니까?</div>
        </St.PasswordModal>
      )}
      <St.CommentWatchBox>
        <St.CommentRow>
          <div>
            <St.CommentWriter>{el.user.name}</St.CommentWriter>
            <div>
              <St.DeleteBtn id={el._id} onClick={onSaveCommentId}>
                <img src="/delete.png" />
              </St.DeleteBtn>
              <St.UpdateBtn id={el._id} onClick={onShowComment}>
                <img src="/update.png" />
              </St.UpdateBtn>
              <St.UpdateBtn id={el._id} onClick={onClickReple}>
                <img src="/reple.png" />
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
        {onReple ? (
          <>
            <St.Commentbox>
              <St.Textarea
                placeholder="개인정보 쏼라쏼라"
                maxLength={500}
                onChange={onChangeContents}
                name="contents"
                defaultValue={el.contents}
              ></St.Textarea>
              <div>
                <St.CommentCount>
                  <St.CommentEnroll onClick={onClickAddReple}>
                    답글달기
                  </St.CommentEnroll>
                </St.CommentCount>
              </div>
            </St.Commentbox>
            <RepleListWrite />
          </>
        ) : null}
      </St.CommentWatchBox>
    </>
  );
};

export default ProductCommentListUI;
