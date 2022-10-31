import styled from "@emotion/styled";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { themeState } from "../../src/store";

const Wrapper = styled.section``;

const Title = styled.h1`
  /* color: ${(props) => props.theme.primaryColor};
  background: ${(props) => props.theme.bgColor}; */
`;

const Content = styled.div`
  padding: 30px;
  margin-bottom: 20px;
  color: var(--primary-color);
  background: var(--bg-color);
`;

const Button = styled.button`
  border: 0;
  padding: 10px 20px;
`;

export default function CommonsThemePage(props) {
  //   const theme = useTheme();
  const [theme, setTheme] = useRecoilState(themeState);

  const onClickButton = () => {
    setTheme((prev) => {
      if (prev === "light") {
        return "dark";
      } else {
        return "light";
      }
    });
  };

  useEffect(() => {
    document.body.dataset.theme = theme;

    // console.log(`테마가 ${theme}라는 값으로 변경되었습니다`);
  }, [theme]);

  return (
    <>
      <Wrapper>
        <Title>공통 CSS연습</Title>
        <Content>
          <p>테스트용 박스 영역입니다</p>
        </Content>
        <Button onClick={onClickButton}>버튼입니다.</Button>
      </Wrapper>
    </>
  );
}
