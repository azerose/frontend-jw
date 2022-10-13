import ListWatch from "../../src/board/components/components/list/boardList.container";
import withAuth from "../../src/commons/hocs/withAuth";

const WatchList = () => {
  withAuth();
  return <ListWatch />;
};

export default WatchList;
