import EnrollProduct from "../../../src/board/components/components/product/productenroll.container";
import withAuth from "../../../src/commons/hocs/withAuth";

const EnrollPage = () => {
  withAuth();

  return <EnrollProduct />;
};

export default EnrollPage;
