import axios from "axios";
import { useState } from "react";

const RestGetPage = () => {
  const [title, setTitle] = useState("");

  const onClickAsync = () => {
    const result = axios.get("https://koreanjson.com/posts/1");
    console.log(result);
  }; //이벤트 핸들러 함수

  const onClickSync = async () => {
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result);
    console.log(result.data);
    console.log(result.title);
    setTitle(result.data.title);
  }; //이벤트 핸들러 함수

  return (
    <>
      <button onClick={onClickAsync}>REST-API(비동기) 요청하기</button>
      <button onClick={onClickSync}>REST-API(동기) 요청하기</button>
      <div>{title}</div>
    </>
  );
};

export default RestGetPage;
