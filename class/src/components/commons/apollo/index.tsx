import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  gql,
  fromPromise,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { accessTokenState } from "../../../commons/store";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  // 1. 프리렌더링 예제 - proccess.brower방법
  // if (process.browser) {
  //   console.log("지금은 브라우저다!!");
  // } else {
  //   window.alert: 아년하세요!""
  //   console.log("지금은 프론트엔드 서버다!! (즉 ,yarn dev로 실행시킨 js)");
  // }

  // 2. 프리렌더링 예제 -typeof window 방법

  // if (typeof Window !=="undefined") {
  //   console.log("지금은 브라우저다!!");
  // } else {
  //   window.alert: 아년하세요!""
  //   console.log("지금은 프론트엔드 서버다!! (즉 ,yarn dev로 실행시킨 js)");
  // }

  // 3. 프리렌더링 무시 - useEffect사용법

  // const result = localStorage.getItem("accessToken");
  // console.log(result);
  // if (result) setAccessToken(result);

  useEffect(() => {
    // 1.기존방식( refreshToken이전)
    const result = localStorage.getItem("accessToken");
    if (result) setAccessToken(result);

    // 2.새로운 방식 (refreshToken 이후)
    void getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1-1. 에러를 캐치
    if (graphQLErrors) {
      // 1-2. 해당에러가 토큰만료 에러인지 체크하기(UNAUTHENTICATED)
      for (const err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            // 2-1. refreshToken으로 accessToken을 재발급 받기
            getAccessToken().then((newAccessToken) => {
              // 2-2. 재발급 받은 accessToken 저장하기
              setAccessToken(newAccessToken);
              // 3-1 . 재발급 받은 accessToken으로 방금 실패한 쿼리의 정보 수정하기
              if (typeof newAccessToken !== "string") return;
              operation.setContext({
                headers: {
                  ...operation.getContext().headers, // 만료된 토큰이 추가되어 있는 상태
                  Authorization: `Bearer ${newAccessToken}`, // 토큰만 새걸로 바꿔치기
                },
              });
            })
          ).flatMap(() => forward(operation)); // 3-2. 방금수정한 쿼리 재요청하기 (토큰 바꿔치기)
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend09.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    // cache: new InMemoryCache(), // 나중에 하기
    cache: GLOBAL_STATE, // 페이지가 전환(_app.tsx 리렌더)되어도, 캐시 유지
    connectToDevTools: true,
  });

  // prettier-ignore
  return <ApolloProvider client={client}>
    {props.children}
    </ApolloProvider>;
}
