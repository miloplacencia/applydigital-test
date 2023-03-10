import { createContext } from "react";

import { ValueOptions } from "../components/select/select";

import { BaseStateType, LoadingStateType } from "./fetcher";

const StoreContext = createContext < {
  articles: BaseStateType[ValueOptions];
  loading: LoadingStateType[ValueOptions];
  selectedOption?: ValueOptions;
  likes?: string[],
}>({
  articles: {} as BaseStateType[ValueOptions],
  loading: {} as LoadingStateType[ValueOptions],
  selectedOption: undefined,
  likes: [] as string[],
});

export default StoreContext;