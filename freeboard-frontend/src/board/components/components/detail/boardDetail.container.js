import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  DISLIKE_BOARD,
  FETCH_BOARD,
  LIKE_BOARD,
} from "../detail/boardDetail.query";
import BoardDetailWriteUI from "./boardDetail.present";

const DetailPage = () => {
  const router = useRouter();
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [hateBoard] = useMutation(DISLIKE_BOARD);

  console.log(router);

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.id,
    },
  });
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
      console.log(error.message);
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

  return (
    <BoardDetailWriteUI
      onClickLike={onClickLike}
      onClickDisLike={onClickDisLike}
      onClickMoveEdit={onClickMoveEdit}
      onClickMoveList={onClickMoveList}
      data={data}
    />
  );
};

export default DetailPage;
