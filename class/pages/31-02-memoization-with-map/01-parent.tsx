import { useState } from "react";
import Word from "./02-child";
import { v4 as uuidv4 } from "uuid";

export default function MemoizationParentPage() {
  const [data, setData] = useState("철수는 오늘 점심을 맛있게 먹었습니다.");

  const onClickChange = () => {
    setData("영희는 오늘 저녁을 맛없게 먹었습니다.");
  };
  return (
    <>
      {/* {data.split(" ").map((el, index) => (
        <Word key={index} el={el} /> // memo시,key 또는 el이 변경된 부분만 리렌더링 됨(즉. "오늘","먹었습니다"를 제외하고 리렌더링 된다는것 )
      ))} */}

      {data.split(" ").map((el, index) => (
        <Word key={uuidv4()} el={el} /> // uuid를 사용하게되면 memo를 해도 key자체가 변경되어 prorps로 넘어가므로, 페이지가 리렌더링됨
      ))}
      <button onClick={onClickChange}>체인지</button>
    </>
  );
}
