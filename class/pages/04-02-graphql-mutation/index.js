import { gql, useMutation } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation {
    createBoard(
      writer: "철수"
      title: "제목입니다"
      contents: "내용이에요!!!"
    ) {
      _id
      number
      message
    }
  }
`;

const GraphqlMutationPage = () => {
  const [createBoard] = useMutation(CREATE_BOARD);
  const onClickSubmit = async () => {
    const result = await createBoard();
    console.log(result);
    alert(result.data.createBoard.message);
  };

  return (
    <>
      <button onClick={onClickSubmit}>GRAPHQL-API(동기)요청하기</button>
    </>
  );
};

export default GraphqlMutationPage;
