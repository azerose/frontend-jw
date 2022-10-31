import { ChangeEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

// prettier-ignore
export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput:CreateBoardInput!) {
    #타입적는곳
    createBoard(createBoardInput:$createBoardInput) {
      #실제 우리가 전달할 변수 적는 곳
      _id
      writer
      title
      contents
    }
  }
`;

const GraphqlMutationPage = () => {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const router = useRouter();
    const result = await createBoard({
      variables: {
        createBoardInput: {
          // variables가 $역할을 수행함
          writer: writer,
          title: title,
          contents: contents,
          password: "1234",
        },
      },
    });
    console.log(result);
    router.push(`/boards/${result.data.createBoard._id}`);
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  return (
    <>
      작성자:
      <input role="input-writer" type="text" onChange={onChangeWriter} />
      <br />
      제목: <input role="input-title" type="text" onChange={onChangeTitle} />
      <br />
      내용:
      <input role="input-contents" type="text" onChange={onChangeContents} />
      <br />
      <button role="submit-button" onClick={onClickSubmit}>
        GRAPHQL-API(동기)요청하기
      </button>
    </>
  );
};

export default GraphqlMutationPage;
