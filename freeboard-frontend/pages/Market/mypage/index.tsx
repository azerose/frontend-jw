import MyPageWrite from "../../../src/board/components/components/mypage/product.mypage.container";
import withAuth from "../../../src/commons/hocs/withAuth";

const MyPage = () => {
  withAuth();
  return <MyPageWrite />;
};

export default MyPage;
