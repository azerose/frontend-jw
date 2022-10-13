import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import EnrollProduct from "../../../../../src/board/components/components/product/productenroll.container";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../../src/commons/types/generated/types";

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        address
        addressDetail
        lat
        lng
      }
      createdAt
    }
  }
`;

const ProductEdit = () => {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, { variables: { useditemId: String(router.query.id) } });
  return <EnrollProduct isEdit={true} data={data} />;
};

export default ProductEdit;
