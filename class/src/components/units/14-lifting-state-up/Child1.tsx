export default function Child1(props) {
  // 부모의 state조작방법1
  const onClick = () => [props.setCount((prev: number) => prev + 1)];
  return (
    <>
      <div>자식1의 카운트:{props.count}</div>
      <button onClick={onClick}>카운트 올리기</button>
    </>
  );
}
