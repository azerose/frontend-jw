import styled from "@emotion/styled";
import { breakPoints } from "../../src/styles/media";

const Item = styled.div`
  width: 95%;
  height: 400px;
  background-color: red;

  // tablet환경에서의 미디어 쿼리
  // 768px 이상 991px 이하
  @media ${breakPoints.tablet} {
    background-color: green;
  }
  // mobile 환경에서의 미디어 쿼리
  //767px 이하
  @media ${breakPoints.mobile} {
    background-color: blue;
  }
`;

export default function ResponsivePage() {
  return <Item>박스입니다.</Item>;
}
