import { useMutation, useQuery } from "@apollo/client";
import { isCompositeType } from "graphql";
import { ChangeEvent, MouseEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { QuestionIdState } from "../../../../../commons/store";
import {
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../../../commons/types/generated/types";
import { FETCH_USEDITEM_QUESTION_ANSWER } from "../comment.product.list/comment.product.list.queries";
import RepleListWriteUI from "./comment.product.replelist.presenter";
import {
  DELETE_USEDITEM_QUESTION_ANSWER,
  UPDATE_USEDITEM_QUESTION_ANSWER,
} from "./comment.product.replelist.queries";

const RepleListWrite = () => {
  const [QuestionId, _] = useRecoilState(QuestionIdState);
  const [getSaveCommentId, setGetSaveCommentId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [contents, setContents] = useState("");
  const [getSaveId, setGetSaveId] = useState("");
  const [onUpdateComment, setOnUpdateComment] = useState(false);
  const [deleteUsedItemQuestionAnswer] = useMutation(
    DELETE_USEDITEM_QUESTION_ANSWER
  );

  const [updateUsedItemQuestionAnswer] = useMutation(
    UPDATE_USEDITEM_QUESTION_ANSWER
  );

  const onClickModalCancel = () => {
    setIsOpen(false);
  };

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USEDITEM_QUESTION_ANSWER, {
    variables: {
      useditemQuestionId: QuestionId,
    },
  });

  console.log(contents);

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onSaveCommentId = (event: MouseEvent<HTMLButtonElement>) => {
    setIsOpen(true);
    setGetSaveCommentId(event.currentTarget.id);
  };

  const onShowComment = (event: MouseEvent<HTMLButtonElement>) => {
    setOnUpdateComment((prev) => !prev);
    setGetSaveId(event.currentTarget.id);
  };

  const onClickDelete = () => {
    deleteUsedItemQuestionAnswer({
      variables: {
        useditemQuestionAnswerId: getSaveCommentId,
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
    setIsOpen(false);
  };

  const onClickEdit = () => {
    updateUsedItemQuestionAnswer({
      variables: {
        updateUseditemQuestionAnswerInput: {
          contents,
        },
        useditemQuestionAnswerId: getSaveId,
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
  console.log(contents);

  return (
    <>
      {data?.fetchUseditemQuestionAnswers.map((el) => (
        <RepleListWriteUI
          QuestionId={QuestionId}
          el={el}
          onSaveCommentId={onSaveCommentId}
          isOpen={isOpen}
          onClickDelete={onClickDelete}
          onClickModalCancel={onClickModalCancel}
          getSaveId={getSaveId}
          onClickEdit={onClickEdit}
          onShowComment={onShowComment}
          onUpdateComment={onUpdateComment}
          onChangeContents={onChangeContents}
        />
      ))}
    </>
  );
};

export default RepleListWrite;
