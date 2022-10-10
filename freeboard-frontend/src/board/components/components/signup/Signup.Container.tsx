import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { errorMsg, success } from "../../../../commons/modal/modalFun";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../../commons/types/generated/types";
import SignUpPageUI from "./Signup.presenter";
import { CREATE_USER } from "./Signup.Queries";

const SignUpPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangePasswrodConfirm = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(event?.target.value);
  };

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onClickSignUp = async () => {
    if (!email.includes("@")) {
      errorMsg("이메일에는 @가 들어가야합니다");
      return;
    }
    if (!password.includes("!") && !password.includes("@")) {
      errorMsg("비밀번호는 5자이상 ! 또는 @가 들어가야합니다");
      return;
    }
    if (passwordConfirm !== password) {
      errorMsg("비밀번호가 서로 다릅니다");
      return;
    }
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email,
            password,
            name,
          },
        },
      });
      success("회원가입 됬습니다");
      router.push("/Market/login");
    } catch (error) {
      if (error instanceof Error) errorMsg(error.message);
    }
  };

  return (
    <SignUpPageUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onChangePasswrodConfirm={onChangePasswrodConfirm}
      onClickSignUp={onClickSignUp}
      onChangeName={onChangeName}
    />
  );
};

export default SignUpPage;
