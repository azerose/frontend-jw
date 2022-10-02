import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../store";

interface IApolloSetting {
  children: JSX.Element;
}

const GLOBAL_STATE = new InMemoryCache();

const ApolloSetting = (props: IApolloSetting) => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const uploadLink = createUploadLink({
    uri: "http://backend09.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: GLOBAL_STATE,
  });

  // prettier-ignore
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};

export default ApolloSetting;
