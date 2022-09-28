import { Modal } from "antd";

const success = () => {
  Modal.success({
    content: "등록에 성공했습니다.",
  });
};

const error = () => {
  Modal.error({ content: " h  i E " });
};

const App = () => {
  return (
    <>
      <button onClick={success}>성공시</button>
      <button onClick={error}>실패시</button>
    </>
  );
};

export default App;
