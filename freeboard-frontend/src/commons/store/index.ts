import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const isTokenState = atom({
  key: "isTokenState",
  default: false,
});

export const MapAddressState = atom({
  key: "MapAddressState",
  default: "",
});

export const QuestionIdState = atom({
  key: "QuestionIdState",
  default: "",
});

export const MapLatState = atom({
  key: "MapLatState",
  default: "",
});

export const MapLngState = atom({
  key: "MapLangState",
  default: "",
});

export const WatchedState = atom({
  key: "WatchedState",
  default: [],
});
