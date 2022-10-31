// 개발자 일때 => 디스코드(개발자)

import { gql, useQuery } from "@apollo/client";
import axios from "axios";
import { GraphQLClient } from "graphql-request";
import Head from "next/head";

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      images
    }
  }
`;

export default function OpenGraphDeveloperPage(props: any) {
  // const {data}= useQuery(FETCH_USEDITEM,{
  //   variables:{useditemId:}
  // });

  return (
    <>
      <Head>
        <meta property="og:title" content={props.qqq.name} />
        <meta property="og:description" content={props.remarks} />
        <meta property="og.image" content={props.images?.[0]} />
      </Head>
    </>
  );
}

// 1. getServerSideProps는 존재하는 단어이므로 변경 불가능
// 2. 여기는 서버에서만 실행됨(webpack 프론트엔드 서버프로그램)
export const getServerSideProps = async () => {
  console.log("여기는 서버입니다!");
  // 1. 여기서 API 요청
  const graphQLClient = new GraphQLClient(
    "https://backend09.codebootcamp.co.kr/graphql"
  );

  const result = await graphQLClient.request(FETCH_USEDITEM, {
    useditemId: "634f50f06cf469002995d5c9",
  });

  // 2. 받아온 결과를 return

  return {
    props: {
      qqq: {
        title: result.fetchUseditem.name,
        remarks: result.fetchUseditem.remarks,
        images: result.fetchUseditem.images,
      },
    },
  };
};
