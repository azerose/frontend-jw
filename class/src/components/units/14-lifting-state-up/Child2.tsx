export default function Child2(props) {
  const onClick = () => [props.setCount((prev: number) => prev + 1)];
  return (
    <>
      <div>자식2의 카운트:{props.count}</div>
      <button onClick={onClick}>카운트 올리기</button>
    </>
  );
}
