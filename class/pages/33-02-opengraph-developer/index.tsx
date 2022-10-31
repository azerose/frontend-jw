// 개발자 일때 => 디스코드(개발자)

import { gql, useQuery } from "@apollo/client";
import axios from "axios";
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

export default function OpenGraphDeveloperPage() {
 const {data}= useQuery(FETCH_USEDITEM,{
    variables:{useditemId:}
  });

  const onClickEnter = async () => {
    // 1. 채팅 데이터에 주소가 있는지 찾기(ex, https://로 시작하는 것)

    // 2. 해당 주소로 스크래핑하기
    const result = await axios.get("https://www.gmarket.com"); // CORS : https://www.naver.com
    console.log(result.data);
    // 3. meta태그에서 오픈그래프(og:) 찾기

    console.log(
      result.data.split("<meta").filter((el: string) => el.includes("og"))
    );
  };

  return (
    <> 
            <Head>
        <meta property="og:title" content={data?.fetchUseditem.name} />
        <meta
        property="og:description"
        content={data?.fetchUseditem.remarks}
        />
        <meta property="og.image" content={data?.fetchUseditem.images?.[0]} />
            </Head>
      <button onClick={onClickEnter}>채팅 입력후 엔터치기</button>
    </>
  );
}
