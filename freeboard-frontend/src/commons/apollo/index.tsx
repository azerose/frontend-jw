import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

interface IApolloSetting {
  children: JSX.Element;
}

const ApolloSetting = (props: IApolloSetting) => {
  const client = new ApolloClient({
    uri: "http://backend09.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  // prettier-ignore
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};

export default ApolloSetting;
