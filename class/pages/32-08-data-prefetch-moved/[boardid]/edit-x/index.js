import BoardWrite from "../../../../src/components/units/board/09-write/BoardWrite.container";
import { useQuery, gql} from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

const GraphqlMutationPage = (props) => {
  const router=useRouter{FETCH_BOARD}
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.number),
    },
  });
  return <BoardWrite isEdit={true} data={data} />;
};

export default GraphqlMutationPage;
