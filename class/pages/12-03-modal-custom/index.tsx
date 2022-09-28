import { Modal } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleComplete = (address: Address) => {
    console.log(address);
    setIsOpen(false);
  };

  // 모달을 종료하는 방식
  // 1. 모달을 숨겼다가 나타나게 하는 방식
  // 2. 모달을 삭제했다가 새로 생성하는 방식

  return (
    <>
      <button onClick={showModal}>모달창 열기!</button>

      {/* 모달 종료 방식 = 1.모달 숨기는 방법(ex:이력서 등) */}
      {/* <Modal
        title="모달의 제목"
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal> */}

      {/* 모달 종료 방식 = 2.모달 삭제하는 방법(ex:신용카드,비밀번호 등) */}

      {isOpen && (
        <Modal
          title="모달의 제목"
          open={isOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
};

export default App;
