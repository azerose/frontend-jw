import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ClassCounterPage() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    console.log("변경되고 나서 실행 ");
  }, [count]); // 의존성 배열 처음에 무조건 실행하고 이후, count가 변경될때만 실행 즉 []안의 요소중 한개라도 영향이 있을떄 실행

  useEffect(() => {
    console.log("변경되고 나서 실행!!");
  }); // 의존성 배열이 없기 때문에 항상 실행

  useEffect(() => {
    console.log("변경되고 나서 실행!!");
  }, []); // 의존성 배열이 비어있기 때문에 처음한번만 실행이후 실행x

  // useEffect(() => {
  //   return () => {
  //     console.log("사라질때 실행!!");
  //   };
  // }, []);

  // useEffect의 특징
  // 1.하나로 합치기 가능
  // useEffect(() => {
  //   console.log("그려지고 나서 실행!!");
  //   return () => {
  //     console.log("사라질때 실행!");
  //   };
  // }, []);

  // 2. useEffect의 잘못된 사용 예제
  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // }, []);
  // //
  //
  //

  const onClickCountUp = () => {
    console.log(count);
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    void router.push("/");
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기!</button>
      <button onClick={onClickMove}>나가기!</button>
    </>
  );
}
