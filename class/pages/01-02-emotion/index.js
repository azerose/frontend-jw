import { Email, EmailInput } from "../../styles/emotion";

export default function EmotionPage() {
  //자바스크립트 쓰는곳
  return (
    <div>
      <Email>아이디</Email>
      <EmailInput type="text" />
      <button>클릭하세요!!</button>
      <img src="/vercel.svg"></img>
    </div>
  );
}
