import { useQuery, gql } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

const StaticRoutedPage = () => {
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: 1,
    },
  });

  console.log(data);

  return (
    <>
      <div>1번 게시글로 이동이 완료되었습니다.</div>
      <div>작성자:{data ? data.fetchBoard.writer : "로딩중입니다..."}</div>
      <div>제목:{data && data.fetchBoard.title}</div>
      <div>내용:{data?.fetchBoard.contents}</div>
    </>
  );
};

export default StaticRoutedPage;
