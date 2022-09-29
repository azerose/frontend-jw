import { AppProps } from "next/app";
import "antd/dist/antd.css";
import ApolloSetting from "../src/commons/apollo";
import Layout from "../src/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/board/styles/globalStyles";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
