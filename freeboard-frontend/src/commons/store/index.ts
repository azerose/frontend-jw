import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const isTokenState = atom({
  key: "isTokenState",
  default: false,
});
