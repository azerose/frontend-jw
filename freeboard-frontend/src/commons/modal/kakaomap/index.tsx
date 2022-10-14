import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { FETCH_USEDITEM } from "../../../board/components/components/productdetail/product.detail.query";
import { MapAddressState } from "../../store";
import { IQuery, IQueryFetchUseditemArgs } from "../../types/generated/types";

declare const window: typeof globalThis & { kakao: any };

export default function KakaoMap() {
  const router = useRouter();

  const [MapAddress, setMapAddress] = useRecoilState(MapAddressState);
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
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(
            data ? data?.fetchUseditem.useditemAddress?.lat : 33.450701,
            data ? data?.fetchUseditem.useditemAddress?.lng : 126.570667
          ), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const geocoder = new window.kakao.maps.services.Geocoder();

        const callback = function (result: any, status: any) {
          if (status === window.kakao.maps.services.Status.OK) {
            console.log(result);
          }
        };
        geocoder.addressSearch(MapAddress, callback);

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        const marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
        });
        // 지도에 마커를 표시합니다
        marker.setMap(map);

        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: any) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);

            let resultInput = document.getElementById("clickLat");
            resultInput.value = latlng.getLat();

            let Lng = document.getElementById("clickLng");
            Lng.value = latlng.getLng();

            console.dir(resultInput);
          }
        );
      });
    };
  }, []);
  return <div id="map" style={{ width: 450, height: 400 }}></div>;
}
