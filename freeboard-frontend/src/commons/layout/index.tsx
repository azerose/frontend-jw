import LayoutBanner from "./Banner";

interface ILayoutProps {
  children: JSX.Element;
}

const Layout = (props: ILayoutProps) => {
  return (
    <>
      <LayoutBanner />
      <div>{props.children}</div>
    </>
  );
};

export default Layout;
