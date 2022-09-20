import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARDS } from "../detail/boardDetail.query";
import ListWriteUI from "./boardList.present";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_BOARDS_COUNT } from "./board.list.query";

const ListWatch = () => {
  const router = useRouter();
  const [startPage, setStartPage] = useState(1);
  const [isChange, setIsChange] = useState(1); //현재 페이지의 아이디를 담아두는 곳

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const lastPage =
    dataBoardsCount != null
      ? Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)
      : 0;

  const onClickMoveDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/board-detail/${(event.target as HTMLDivElement).id}`);
  };

  const onClickMoveCreate = () => {
    router.push("/boards/board-write");
  };

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    void refetch({ page: Number(event.currentTarget.id) });
    setIsChange(Number(event.currentTarget.id));
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    void refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage((prev) => prev + 10);
      void refetch({ page: startPage + 10 });
    }
  };

  return (
    <ListWriteUI
      onClickMoveCreate={onClickMoveCreate}
      data={data}
      onClickMoveDetail={onClickMoveDetail}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      startPage={startPage}
      lastPage={lastPage}
      onClickPage={onClickPage}
      isChange={isChange}
    />
  );
};

export default ListWatch;
