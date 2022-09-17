import { FETCH_BOARD_COMMENTS } from "../../detail/boardDetail.query";
import CommentListUI from "./comment.list.presenter";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../../commons/types/generated/types";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { DELETE_COMMENT } from "./comment.list.Queries";

const WatchCommentList = () => {
  const router = useRouter();
  const [deleteBoardComment] = useMutation(DELETE_COMMENT);

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: String(router.query.id),
    },
  });

  const onClickDeleteComment = async (event: MouseEvent<HTMLButtonElement>) => {
    try {
      const result = await deleteBoardComment({
        variables: {
          password: prompt("비밀번호를 입력해주세요"),
          boardCommentId: event.currentTarget.id,
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
      if (error instanceof Error) {
      }
    }
  };

  return (
    <CommentListUI data={data} onClickDeleteComment={onClickDeleteComment} />
  );
};

export default WatchCommentList;
