import { useRouter } from "next/router";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "../../detail/boardDetail.query";
import WriteCommentUI from "./comment.presenter";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ChangeEvent } from "react";
import { errorMsg, success } from "../../../../../commons/modal/modalFun";
import { IWriteComment } from "./comment.type";
import {
  CREATE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
} from "./comment.queries";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
} from "../../../../../commons/types/generated/types";

const WriteComment = ({ isMarket }: IWriteComment) => {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [pw, setPw] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [createUsedItemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USEDITEM_QUESTION);

  const onClickQuestion = async () => {
    try {
      await createUsedItemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents: comment,
          },
          useditemId: String(router.query.id),
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
      {
        setComment("");
      }
    } catch (error) {
      if (error instanceof Error) {
        errorMsg(error.message);
      }
    }
  };

  const onClickCreateComment = async () => {
    if (writer && pw && comment && rating) {
      try {
        await createBoardComment({
          variables: {
            createBoardCommentInput: {
              writer,
              contents: comment,
              password: pw,
              rating,
            },
            boardId: String(router.query.id),
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: {
                boardId: router.query.id,
              },
            },
          ],
        });
        {
          setWriter("");
          setPw("");
          setComment("");
          setRating(0);
          success("댓글이 등록되었습니다.");
        }
      } catch (error) {
        if (error instanceof Error) errorMsg(error.message);
      }
    } else {
      if (!writer) {
        errorMsg("작성자를 적어주세요");
      }
      if (!pw) {
        errorMsg("비밀번호를 입력해주세요");
      }
      if (!comment) {
        errorMsg("내용을 입력해주세요");
      }
      if (!rating) {
        errorMsg("평점을 지정해주세요");
      }
    }
  };

  const onChangeComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangeCommentPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPw(event.target.value);
  };

  const onChangeRating = (value: number) => {
    setRating(value);
  };

  return (
    <WriteCommentUI
      onChangeComment={onChangeComment}
      comment={comment}
      onClickCreateComment={onClickCreateComment}
      onChangeWriter={onChangeWriter}
      onChangeCommentPassword={onChangeCommentPassword}
      onChangeRating={onChangeRating}
      onClickQuestion={onClickQuestion}
      rating={Number(rating)}
      writer={writer}
      pw={pw}
      isMarket={isMarket}
    />
  );
};

export default WriteComment;
