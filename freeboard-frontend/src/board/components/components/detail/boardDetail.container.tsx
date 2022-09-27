import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  DELETE_BOARD,
  DISLIKE_BOARD,
  FETCH_BOARD,
  LIKE_BOARD,
} from "./boardDetail.query";
import BoardDetailWriteUI from "./boardDetail.present";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { errorMsg } from "../../../../commons/modal/modalFun";

const DetailPage = () => {
  const router = useRouter();
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [hateBoard] = useMutation(DISLIKE_BOARD);
  const [deleteboard] = useMutation(DELETE_BOARD);

  console.log(router);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: String(router.query.id),
      },
    }
  );
  console.log(data);

  const onClickLike = async () => {
    try {
      const result = await likeBoard({
        variables: {
          boardId: router.query.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: {
              boardId: router.query.id,
            },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) errorMsg(error.message);
    }
  };
  const onClickDisLike = async () => {
    const hate = await hateBoard({
      variables: {
        boardId: router.query.id,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: {
            boardId: router.query.id,
          },
        },
      ],
    });
    console.log(router);
  };
  const onClickMoveEdit = () => {
    router.push(`/boards/board-detail/${router.query.id}/edit`);
  };

  const onClickMoveList = () => {
    router.push("/boards");
  };

  const onClickDelete = () => {
    deleteboard({
      variables: { boardId: router.query.id },
    });

    router.push("/boards");
  };

  return (
    <BoardDetailWriteUI
      onClickLike={onClickLike}
      onClickDisLike={onClickDisLike}
      onClickMoveEdit={onClickMoveEdit}
      onClickMoveList={onClickMoveList}
      onClickDelete={onClickDelete}
      data={data}
    />
  );
};

export default DetailPage;
