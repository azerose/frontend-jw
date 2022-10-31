import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      _id
      writer
      title
      contents
    }
  }
`;

const StaticRoutedPage = () => {
  const router = useRouter();
  console.log(router);

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  console.log(data);

  return (
    <>
      <div>작성자:{data ? data.fetchBoard.writer : "로딩중입니다..."}</div>
      <div>제목:{data && data.fetchBoard.title}</div>
      <div>내용:{data?.fetchBoard.contents}</div>
    </>
  );
};

export default StaticRoutedPage;
