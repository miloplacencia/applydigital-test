import { createContext } from "react";

import { ValueOptions } from "../components/select/select";

import { BaseStateType, LoadingStateType } from "./fetcher";

interface IStoreContext {
  articles: BaseStateType[ValueOptions];
  loading: LoadingStateType[ValueOptions];
  selectedOption?: ValueOptions;
  likes?: string[];
  fetch: (page: number) => void;
}

const StoreContext = createContext<IStoreContext>({
  articles: {} as BaseStateType[ValueOptions],
  loading: {} as LoadingStateType[ValueOptions],
  selectedOption: undefined,
  likes: [] as string[],
  fetch: () => {},
});

export default StoreContext;