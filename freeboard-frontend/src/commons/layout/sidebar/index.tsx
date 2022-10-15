import { useQuery } from "@apollo/client";
import { FETCH_USEDITEMS } from "../../../board/components/components/productList/productList.queries";
import { IQuery, IQueryFetchUseditemsArgs } from "../../types/generated/types";

const LayoutSideBar = () => {
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USEDITEMS);

  //   const baskets: IBaskets = JSON.parse(localStorage.getItem("baskets") ?? "[]");
  //
  //   const temp = baskets.filter((el) => el._id === basket._id);
  //   if (temp.length === 1) {
  //     alert("이미 담겨있는 물품이오");
  //     return;
  //   }

  //   baskets.push(basket);
  // localStorage.setItem("baskets", JSON.stringify(baskets));

  return (
    <>
      <div>
        <div className="header">오늘 본 상품</div>
        {/* {data?.fetchUseditems.map((el) => (
          <div key={el._id}>
            <img src={`https://storage.googleapis.com/${el.images[0]}`} />
          </div>
        ))} */}
      </div>
    </>
  );
};

export default LayoutSideBar;
