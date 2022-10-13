import { useRouter } from "next/router";
import { useEffect } from "react";
import { errorMsg } from "../modal/modalFun";

export default function withAuth() {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      errorMsg("로그인 후 이용가능합니다");
      void router.push("/Market/login");
    }
  }, []);
}
