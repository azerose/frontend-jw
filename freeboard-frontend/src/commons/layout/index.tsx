import LayoutBanner from "./Banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import LayoutSideBar from "./sidebar";

interface ILayoutProps {
  children: JSX.Element;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HIDDEN_BANNERS = [
  "/Market/login",
  "/boards/detail",
  "/Market/signup",
  "/Market/newproducts",
];

const Layout = (props: ILayoutProps) => {
  const router = useRouter();

  const isHiddenBanner = HIDDEN_BANNERS.includes(router.asPath);

  return (
    <Wrapper>
      <LayoutHeader />
      {!isHiddenBanner && <LayoutBanner />}
      <div style={{ display: "flex" }}>
        <div>{props.children}</div>
        <LayoutSideBar />
      </div>
      <LayoutFooter />
    </Wrapper>
  );
};

export default Layout;
