import CommentListUI from "./comment.list.presenter";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../../commons/types/generated/types";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { DELETE_COMMENT, UPDATE_BOARD_COMMENT } from "./comment.list.Queries";
import { IUpdateCommentData, IWatchCommentList } from "./comment.list.types";
import { errorMsg } from "../../../../../commons/modal/modalFun";
import { FETCH_BOARD_COMMENTS } from "../../detail/boardDetail.query";

const WatchCommentList = ({ el, fetchMore, data }: IWatchCommentList) => {
  const router = useRouter();
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_COMMENT);

  const [updateBoardCommemt] = useMutation(UPDATE_BOARD_COMMENT);

  const [udWriter, setUdWriter] = useState("");
  const [udpassword, setPassword] = useState("");
  const [udContents, setContents] = useState("");

  const [onUpdateComment, setOnUpdateComment] = useState(false);
  const [getSaveId, setGetSaveId] = useState("");
  const [rating, setRating] = useState(0);
  const [getSaveCommentId, setGetSaveCommentId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [depassword, setDepassword] = useState("");

  const onShowComment = (event: MouseEvent<HTMLButtonElement>) => {
    setOnUpdateComment((prev) => !prev);
    setGetSaveId(event.currentTarget.id);
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setUdWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onSaveCommentId = (event: MouseEvent<HTMLButtonElement>) => {
    setIsOpen(true);
    setGetSaveCommentId(event.currentTarget.id);
  };

  const onClickModalCancel = () => {
    setIsOpen(false);
  };

  const onChangeInputPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setDepassword(event.target.value);
  };

  const onChangeLoadmore = () => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil(data?.fetchBoardComments.length / 10) + 1,
        boardId: String(router.query.id),
      },
      updateQuery: (prev: any, { fetchMoreResult }: any) => {
        if (fetchMoreResult.fetchBoardComments === undefined) {
          return {
            fetchBoardComments: [...prev.fetchBoardComments],
          };
        }
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  const commentEditOnchange = async (event: MouseEvent<HTMLButtonElement>) => {
    const updateCommentData: IUpdateCommentData = {
      password: udpassword,
      boardCommentId: getSaveId,
      updateBoardCommentInput: {},
    };
    if (udContents)
      updateCommentData.updateBoardCommentInput.contents = udContents;
    if (rating) updateCommentData.updateBoardCommentInput.rating = rating;
    const commentResult = await updateBoardCommemt({
      variables: updateCommentData,
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: {
            boardId: router.query.id,
          },
        },
      ],
    });
  };

  const onClickDeleteComment = async (event: MouseEvent<HTMLElement>) => {
    try {
      const result = await deleteBoardComment({
        variables: {
          password: depassword,
          boardCommentId: getSaveCommentId,
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
      setIsOpen(false);
    } catch (error) {
      if (error instanceof Error) {
        errorMsg(error.message);
      }
    }
  };

  return (
    <>
      <CommentListUI
        onChangeInputPassword={onChangeInputPassword}
        onClickModalCancel={onClickModalCancel}
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeContents={onChangeContents}
        onClickDeleteComment={onClickDeleteComment}
        commentEditOnchange={commentEditOnchange}
        onUpdateComment={onUpdateComment}
        onShowComment={onShowComment}
        getSaveId={getSaveId}
        onSaveCommentId={onSaveCommentId}
        isOpen={isOpen}
        onChangeLoadmore={onChangeLoadmore}
        el={el}
      />
    </>
  );
};
export default WatchCommentList;
