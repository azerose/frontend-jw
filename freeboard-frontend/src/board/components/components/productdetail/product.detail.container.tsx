import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { errorMsg } from "../../../../commons/modal/modalFun";
import { WatchedState } from "../../../../commons/store";
import {
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
  IMutationDeleteUseditemArgs,
  IMutationToggleUseditemPickArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import ProductDetailWriteUI from "./product.detail.presenter";
import {
  CREATE_POINT,
  DELETE_USEDITEM,
  FETCH_USEDITEM,
  LIKE_COUNT,
} from "./product.detail.query";
declare const window: typeof globalThis & { kakao: any };

const ProductDetailWrite = () => {
  const router = useRouter();
  const [watched, setWatched] = useRecoilState(WatchedState);
  const [createPointTransactionOfBuyingAndSelling] = useMutation<
    Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
  >(CREATE_POINT);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, { variables: { useditemId: String(router.query.id) } });

  const [deleteUsedItem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USEDITEM);

  const [toggleUseditemPick] = useMutation<
    Pick<IMutation, "toggleUseditemPick">,
    IMutationToggleUseditemPickArgs
  >(LIKE_COUNT);

  useEffect(() => {
    if (sessionStorage.watched === undefined) {
      sessionStorage.setItem("watched", JSON.stringify([""]));
    }
    let watched = JSON.parse(String(sessionStorage.getItem("watched")));
    const watchFilter = watched.filter(
      (el: any) => el === data?.fetchUseditem.images?.[0]
    );
    if (watchFilter.length === 1) return;

    if (watched.length === 3) watched.pop();
    if (data?.fetchUseditem.images?.[0] !== undefined) {
      watched.unshift(data?.fetchUseditem.images?.[0]);
      sessionStorage.setItem("watched", JSON.stringify(watched));
      setWatched(watched);
    }

    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=3184a326497a8295a49c511f252ae15b";
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=3184a326497a8295a49c511f252ae15b&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const mapContainer = document.getElementById("map"); // ????????? ?????? ????????? DOM ????????????

        const mapOption = {
          // ????????? ????????? ??? ????????? ?????? ??????
          center: new window.kakao.maps.LatLng(
            data ? data?.fetchUseditem.useditemAddress?.lat : "",
            data ? data?.fetchUseditem.useditemAddress?.lng : ""
          ), // ????????? ????????????.
          level: 3, // ????????? ??????(??????, ?????? ??????)
        };

        const map = new window.kakao.maps.Map(mapContainer, mapOption); // ?????? ?????? ??? ?????? ??????
        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(
          data?.fetchUseditem?.useditemAddress?.address,
          function (result: any, status: any) {
            // ??????????????? ????????? ???????????????
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );
              // ??????????????? ?????? ????????? ????????? ???????????????
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              // ?????????????????? ????????? ?????? ????????? ???????????????
              // var infowindow = new window.kakao.maps.InfoWindow({
              //   content:
              //     '<div style="width:150px;text-align:center;padding:6px 0;">????????????</div>',
              // });
              // infowindow.open(map, marker);

              // ????????? ????????? ??????????????? ?????? ????????? ??????????????????
              map.setCenter(coords);
              map.relayout();
            }
          }
        );
      });
    };
  }, [data]);

  const onClickLike = () => {
    try {
      toggleUseditemPick({
        variables: {
          useditemId: String(router.query.id),
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM,
            variables: {
              useditemId: router.query.id,
            },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) {
        errorMsg(error.message);
      }
    }
  };

  const onClickBuy = () => {
    createPointTransactionOfBuyingAndSelling({
      variables: { useritemId: String(router.query.id) },
    });
    void router.push("/");
  };

  const onClickDelete = () => {
    try {
      deleteUsedItem({ variables: { useditemId: String(router.query.id) } });
    } catch (error) {
      if (error instanceof Error) {
        errorMsg(error.message);
      }
    }
    void router.push("/");
  };

  const onClickMoveEdit = () => {
    router.push(`/Market/detail/${router.query.id}/edit`);
  };

  return (
    <ProductDetailWriteUI
      data={data}
      onClickDelete={onClickDelete}
      onClickMoveEdit={onClickMoveEdit}
      onClickBuy={onClickBuy}
      onClickLike={onClickLike}
    />
  );
};

export default ProductDetailWrite;
