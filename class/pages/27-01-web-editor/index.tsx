import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { Modal } from "antd";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function WebEditorPage() {
  // ReactQuill 만든 사람들이 만든 onChange이므로 event가 안들어옴
  const onChangeContents = (value: string) => {
    console.log(value);
  };

  const onClickSubmit = async () => {
    const { Modal } = await import("antd");
    Modal.success({ content: "등록에 성공하였습니다!" });
  };

  return (
    <div>
      작성자 :<input type="text" />
      <br />
      비밀번호 :<input type="password" />
      <br />
      제목:
      <input type="text" />
      <br />
      내용:
      <ReactQuill onChange={onChangeContents} />
      <br />
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}
