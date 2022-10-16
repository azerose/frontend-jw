import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { QuestionIdState } from "../../../../../commons/store";
import { FETCH_USEDITEM_QUESTIONS } from "../comment.contents/comment.queries";
import { ISeeCommentList } from "../comment.contents/comment.type";
import ProductCommentListUI from "./comment.product.list.presenter";
import {
  CREATE_USEDITEM_QUESTION_ANSWER,
  DELETE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTION_ANSWER,
  UPDATE_USEDITEM_QUESTION,
} from "./comment.product.list.queries";

const ProductCommentListWrite = ({ el, fetchMore, data }: ISeeCommentList) => {
  const router = useRouter();
  const [QuestionId, setQustionId] = useRecoilState(QuestionIdState);
  const [deleteUsedItemQuestion] = useMutation(DELETE_USEDITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USEDITEM_QUESTION);
  const [createUsedItemQuestionAnswer] = useMutation(
    CREATE_USEDITEM_QUESTION_ANSWER
  );

  const [getSaveCommentId, setGetSaveCommentId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [contents, setContents] = useState("");
  const [onUpdateComment, setOnUpdateComment] = useState(false);
  const [getSaveId, setGetSaveId] = useState("");
  const [onReple, setOnReple] = useState(false);

  const onSaveCommentId = (event: MouseEvent<HTMLButtonElement>) => {
    setIsOpen(true);
    setGetSaveCommentId(event.currentTarget.id);
  };

  const onShowComment = (event: MouseEvent<HTMLButtonElement>) => {
    setOnUpdateComment((prev) => !prev);
    setGetSaveId(event.currentTarget.id);
  };

  const onClickModalCancel = () => {
    setIsOpen(false);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onClickReple = (event: MouseEvent<HTMLButtonElement>) => {
    setOnReple((prev) => !prev);
    setQustionId(event.currentTarget.id);
  };

  const onClickAddReple = () => {
    createUsedItemQuestionAnswer({
      variables: {
        createUseditemQuestionAnswerInput: {
          contents,
        },
        useditemQuestionId: QuestionId,
      },
      refetchQueries: [
        {
          query: FETCH_USEDITEM_QUESTION_ANSWER,
          variables: {
            useditemQuestionId: QuestionId,
          },
        },
      ],
    });
  };

  const onClickEdit = async (event: MouseEvent<HTMLButtonElement>) => {
    await updateUseditemQuestion({
      variables: {
        useditemQuestionId: getSaveId,
        updateUseditemQuestionInput: {
          contents,
        },
      },
      refetchQueries: [
        {
          query: FETCH_USEDITEM_QUESTIONS,
          variables: {
            useditemId: router.query.id,
          },
        },
      ],
    });
  };

  const onClickDeleteComment = async () => {
    await deleteUsedItemQuestion({
      variables: {
        useditemQuestionId: getSaveCommentId,
      },
      refetchQueries: [
        {
          query: FETCH_USEDITEM_QUESTIONS,
          variables: {
            useditemId: router.query.id,
          },
        },
      ],
    });
    setIsOpen(false);
  };

  return (
    <ProductCommentListUI
      el={el}
      onClickDeleteComment={onClickDeleteComment}
      onSaveCommentId={onSaveCommentId}
      onClickModalCancel={onClickModalCancel}
      onChangeContents={onChangeContents}
      onShowComment={onShowComment}
      isOpen={isOpen}
      onUpdateComment={onUpdateComment}
      onClickEdit={onClickEdit}
      getSaveId={getSaveId}
      onClickReple={onClickReple}
      onReple={onReple}
      onClickAddReple={onClickAddReple}
    />
  );
};

export default ProductCommentListWrite;
