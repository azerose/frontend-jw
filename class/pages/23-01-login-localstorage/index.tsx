import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../src/commons/store";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const LoginPage = () => {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    try {
      // 1. 로그인 해서 accessToken 받아오기
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;
      console.log(accessToken);

      // 2. accessToken 을 globalState에 저장하기
      if (!accessToken) {
        Modal.error({
          content: "로그인에 실패하였습니다. 다시 시도해 주세요.",
        });
        return;
      }
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken); // 나중에 지울 예정 -임시사용
      localStorage.getItem("");

      // 3. 로그인 성공 페이지로 이동하기
      void router.push("/23-02-login-localstorage-success");
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({ content: error.message });
      }
    }
  };

  return (
    <>
      이메일:
      <input type="text" onChange={onChangeEmail} />
      비밀번호:
      <input type="password" onChange={onChangePassword} />
      <button onClick={onClickLogin}>로그인 하기</button>
    </>
  );
};

export default LoginPage;
