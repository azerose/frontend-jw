import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { FETCH_USEDITEM } from "../../../board/components/components/productdetail/product.detail.query";
import { MapAddressState, MapLatState, MapLngState } from "../../store";
import { IQuery, IQueryFetchUseditemArgs } from "../../types/generated/types";

declare const window: typeof globalThis & { kakao: any };

export default function KakaoMap() {
  const router = useRouter();
  const [MapAddress, _] = useRecoilState(MapAddressState);
  const [, setMapLat] = useRecoilState(MapLatState);
  const [, setMapLng] = useRecoilState(MapLngState);
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, { variables: { useditemId: String(router.query.id) } });
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=3184a326497a8295a49c511f252ae15b";
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=3184a326497a8295a49c511f252ae15b&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const mapContainer = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스

        const mapOption = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(
            data ? data?.fetchUseditem.useditemAddress?.lat : "",
            data ? data?.fetchUseditem.useditemAddress?.lng : ""
          ), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도 생성 및 객체 리턴
        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(MapAddress, function (result: any, status: any) {
          // 정상적으로 검색이 완료됐으면
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x
            );
            // props.setValue("useditemAddress.lat", Number(result[0].x));
            // props.setValue("useditemAddress.lng", Number(result[0].y));
            setMapLat(result[0].x);
            setMapLng(result[0].y);
            // 결과값으로 받은 위치를 마커로 표시합니다
            const marker = new window.kakao.maps.Marker({
              map: map,
              position: coords,
            });

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            // var infowindow = new window.kakao.maps.InfoWindow({
            //   content:
            //     '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>',
            // });
            // infowindow.open(map, marker);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
          }
        });
      });
    };
  }, []);
  return <div id="map" style={{ width: 450, height: 400 }}></div>;
}
