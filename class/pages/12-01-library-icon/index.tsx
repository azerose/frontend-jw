import { Rate } from "antd";
import styled from "@emotion/styled";
import { useState } from "react";

const MyStar = styled(Rate)``;

export default function LibraryIconPage() {
  const [value, setValue] = useState(3);
  //   const qqq = (aaa: number) => setValue(aaa);
  // aaa는 매개변수

  return <MyStar onChange={(value) => setValue(value)} />;
}
