import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

// prettier-ignore
const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) { #타입적는곳
    createBoard(writer: $writer, title: $title, contents: $contents) {#실제 우리가 전달할 변수 적는 곳
      _id
      number
      message
    }
  }
`;

const GraphqlMutationPage = () => {
  const [inputs, setInputs] = useState({ writer: "", title: "", contents: "" });
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        ...inputs,
      },
    });
    alert(result.data.createBoard.message);
  };

  const onChangeInputs = (event) => {
    setInputs({ ...inputs, [event.target.id]: event.target.value }); // []안에 들어있는것은 배열이 아닌 변수명 즉 변수명의 값을 키로쓰겠다는것
  };

  return (
    <>
      작성자: <input id="writer" type="text" onChange={onChangeInputs} />
      <br />
      제목: <input id="title" type="text" onChange={onChangeInputs} />
      <br />
      내용: <input id="contents" type="text" onChange={onChangeInputs} />
      <br />
      <button onClick={onClickSubmit}>GRAPHQL-API(동기)요청하기</button>
    </>
  );
};

export default GraphqlMutationPage;
