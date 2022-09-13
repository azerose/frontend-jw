import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Board from "../../../../../src/board/components/components/main/board.container";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
    }
  }
`;
const BoardEdit = () => {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id },
  });
  return <Board isEdit={true} data={data} />;
};

export default BoardEdit;
