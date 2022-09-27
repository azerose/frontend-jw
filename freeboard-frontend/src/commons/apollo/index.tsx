import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

interface IApolloSetting {
  children: JSX.Element;
}

const ApolloSetting = (props: IApolloSetting) => {
  const uploadLink = createUploadLink({
    uri: "http://backend09.codebootcamp.co.kr/graphql",
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  // prettier-ignore
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};

export default ApolloSetting;
