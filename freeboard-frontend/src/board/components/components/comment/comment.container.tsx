import { useRouter } from "next/router";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "../detail/boardDetail.query";
import WriteCommentUI from "./comment.presenter";
import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { DELETE_COMMENT } from "./comment.Queries";
import { ChangeEvent, MouseEvent } from "react";

const WriteComment = () => {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [pw, setPw] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [deleteBoardComment] = useMutation(DELETE_COMMENT);

  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.id,
    },
  });

  const onClickCreateComment = () => {
    const commentResult = createBoardComment({
      variables: {
        createBoardCommentInput: {
          writer: writer,
          password: pw,
          contents: comment,
          rating: 1,
        },
        boardId: router.query.id,
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
    console.log(commentResult);
  };

  console.log(pw);
  const onClickDeleteComment = async (event: MouseEvent<HTMLButtonElement>) => {
    try {
      const result = await deleteBoardComment({
        variables: {
          password: prompt("비밀번호를 입력해주세요"),
          boardCommentId: (event.target as HTMLButtonElement).id,
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
      console.log(result);
    } catch (error) {
      console.log(error);
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

  return (
    <WriteCommentUI
      onChangeComment={onChangeComment}
      comment={comment}
      onClickCreateComment={onClickCreateComment}
      onChangeWriter={onChangeWriter}
      data={data}
      onClickDeleteComment={onClickDeleteComment}
      onChangeCommentPassword={onChangeCommentPassword}
    />
  );
};

export default WriteComment;
