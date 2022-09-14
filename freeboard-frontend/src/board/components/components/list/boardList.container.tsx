import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARDS } from "../detail/boardDetail.query";
import ListWriteUI from "./boardList.present";
import { MouseEvent } from "react";

const ListWatch = () => {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);
  console.log(data?.fetchBoards);

  const onClickMoveDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/board-detail/${(event.target as HTMLDivElement).id}`);
  };
  const onClickMoveCreate = () => {
    router.push("/boards/board-write");
  };
  return (
    <ListWriteUI
      onClickMoveCreate={onClickMoveCreate}
      data={data}
      onClickMoveDetail={onClickMoveDetail}
    />
  );
};

export default ListWatch;
