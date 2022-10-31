import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFIle($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState(File);

  const [createBoard] = useMutation(CREATE_BOARD);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onClickSubmit = async () => {
    const resultFIle = await uploadFile({ variables: { file } });
    const url = resultFIle.data?.uploadFile.url;

    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: "철수",
          password: "1234",
          title: " 안녕하세요",
          contents: "반갑습니다",
          images: [url],
        },
      },
    });
    console.log(result);
    // alert(result.data.createBoard.message);
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // multiple속성으로 여러개 드래그 가능
    if (!file) return;
    console.log(file);

    // try {
    //   const result = await uploadFile({ variables: { file } });
    //   console.log(result.data?.uploadFile.url);
    //   setImageUrl(result.data?.uploadFile.url ?? "");
    // } catch (error) {
    //   if (error instanceof Error) Modal.error({ content: error.message });
    // }
    // 1.임시 URL 생성-{가짜URL} - 내 브라우저에서만 접근가능
    // const result = URL.createObjectURL(file);
    // setImageUrl(result);

    // 2.임시 URL 생성-{진짜URL} -다른 브랃우저에서도 접근가능
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        setImageUrl(event.target?.result); // 게시판에서 evnet.target.id다신 event.currentTarget.id를 썻던 이유 :event.target은 태그만을 가르키지 않음
        setFile(file);
      }
    };
  };
  return (
    <>
      <div></div>
      <div style={{ width: "50px" }}>이미지 선택</div>
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} />
      <button onClick={onClickSubmit}>게시글 등록하기</button>
      {/* <img src={`https://storage.googleapis.com/  ${imageUrl}`} /> */}
    </>
  );
}
