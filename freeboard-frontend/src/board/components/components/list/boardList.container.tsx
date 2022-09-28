import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARDS } from "../detail/boardDetail.query";
import ListWriteUI from "./boardList.present";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_BOARDS_COUNT } from "./board.list.query";
import { DatePicker } from "antd";

const ListWatch = () => {
  const router = useRouter();
  const [startPage, setStartPage] = useState(1);
  const [isChange, setIsChange] = useState(1); //현재 페이지의 아이디를 담아두는 곳
  const [search, setSearch] = useState("");
  const [searchPage, setSearchPage] = useState(0);

  const { RangePicker } = DatePicker;
  const dateFormat = "YYYY-MM-DD";
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount, refetch: refetchCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const lastPage =
    dataBoardsCount != null
      ? Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)
      : 0;

  const onClickMoveDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/board-detail/${event.currentTarget.id}`);
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
    setIsChange(startPage - 10);
    setStartPage((prev) => prev - 10);
    void refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setIsChange(startPage + 10);
      setStartPage((prev) => prev + 10);
      void refetch({ page: startPage + 10 });
    }
  };

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const onClickSearch = () => {
    const result = void refetch({ search, page: 1 });
    void refetchCount({ search });
  };
  console.log(dataBoardsCount);

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
      RangePicker={RangePicker}
      dateFormat={dateFormat}
      onClickSearch={onClickSearch}
      onChangeSearch={onChangeSearch}
    />
  );
};

export default ListWatch;
