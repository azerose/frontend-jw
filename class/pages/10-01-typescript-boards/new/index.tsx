import BoardWrite from "../../../src/components/units/board/10-write/BoardWrite.container";

const GraphqlMutationPage = () => {
  return <>{BoardWrite({ isEdit: false })}</>;

  // <BoardWrite isEdit={false} />;
};

export default GraphqlMutationPage;
