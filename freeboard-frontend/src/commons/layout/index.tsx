import LayoutBanner from "./Banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import styled from "@emotion/styled";

interface ILayoutProps {
  children: JSX.Element;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Layout = (props: ILayoutProps) => {
  return (
    <Wrapper>
      <LayoutHeader />
      <LayoutBanner />
      <div>{props.children}</div>
      <LayoutFooter />
    </Wrapper>
  );
};

export default Layout;
