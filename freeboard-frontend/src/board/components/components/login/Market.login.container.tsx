import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";
import MarketLoginUI from "./Market.login.presenter";
import { LOGIN_USER } from "./Market.login.query";

const MarketLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

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

  const onClickMoveSignUp = () => {
    router.push("/Market/signup");
  };

  const onClickLogin = async () => {
    try {
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });

      const accessToken = result.data?.loginUser.accessToken;

      if (!accessToken) {
        Modal.error({
          content: "로그인에 실패하였습니다. 다시 시도해 주세요.",
        });
        return;
      }
      setAccessToken(accessToken);
      void router.push("/");
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({ content: error.message });
      }
    }
  };

  return (
    <MarketLoginUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
      onClickMoveSignUp={onClickMoveSignUp}
    />
  );
};

export default MarketLogin;
