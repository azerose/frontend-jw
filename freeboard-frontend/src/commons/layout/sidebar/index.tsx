import { useQuery } from "@apollo/client";
import { FETCH_USEDITEMS } from "../../../board/components/components/productList/productList.queries";
import { IQuery, IQueryFetchUseditemsArgs } from "../../types/generated/types";

import * as S from "./sidebar.styles";

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
      <S.SidebarWrapper>
        <S.Text>최근 본 상품</S.Text>
        <S.ImgWrapper>
          {get_local !== null
            ? get_local.map((a, i) => {
                return (
                  <div>
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src={`https://storage.googleapis.com/${get_local[i]}`}
                    />
                  </div>
                );
              })
            : null}
        </S.ImgWrapper>
      </S.SidebarWrapper>
    </>
  );
};

export default LayoutSideBar;
