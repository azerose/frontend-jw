import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

export default function ImageUploadPage() {
  const [imageUrl, setImageUrl] = useState("");

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
    const result = URL.createObjectURL(file);
    setImageUrl(result);

    // 2.임시 URL 생성-{진짜URL} -다른 브랃우저에서도 접근가능
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      if (typeof event.target?.result === "string")
        setImageUrl(event.target?.result);
    };
  };
  return (
    <>
      <div></div>
      <div style={{ width: "50px" }}>이미지 선택</div>
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} />

      {/* <img src={`https://storage.googleapis.com/  ${imageUrl}`} /> */}
    </>
  );
}
