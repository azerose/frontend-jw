import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { FETCH_USEDITEMS } from "../../../board/components/components/productList/productList.queries";
import { WatchedState } from "../../store";
import { IQuery, IQueryFetchUseditemsArgs } from "../../types/generated/types";

import * as S from "./sidebar.styles";

const LayoutSideBar = () => {
  const [watched, setWatched] = useRecoilState(WatchedState);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USEDITEMS);

  useEffect(() => {
    watched === null
      ? sessionStorage.setItem("watched", JSON.stringify([]))
      : null;
  }, []);

  return (
    <>
      <S.SidebarWrapper>
        <S.Text>최근 본 상품</S.Text>
        <S.ImgWrapper>
          {watched.map((a, i) => {
            return (
              <div>
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    backgroundImage: `url(https://storage.googleapis.com/${watched[i]})`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
            );
          })}
        </S.ImgWrapper>
      </S.SidebarWrapper>
    </>
  );
};

export default LayoutSideBar;
