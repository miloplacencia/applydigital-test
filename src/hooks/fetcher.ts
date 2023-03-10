import { useEffect } from 'react';
import { useState } from 'react';
import { HNQuery } from '../interfaces/hackernews_query';
import { ValueOptions } from './../components/select/select';

const fetcher = async <T>(query: ValueOptions, { page = 0 }): Promise<T> => {
  const BASE_URL = new URL('https://hn.algolia.com/api/v1/search_by_date?page='+page);
  BASE_URL.searchParams.set('query', query);

  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}


export type BaseStateType = {
  [key in ValueOptions]: {
    list: HNQuery['hits'];
    page: number;
  }
}
export type LoadingStateType = {
  [key in ValueOptions]: boolean;
}

export const useFetch = (query?: ValueOptions) => {
  const [loading, setLoading] = useState<LoadingStateType>({
    angular: false,
    reactjs: false,
    vuejs: false
  });

  const [articles, setArticles] = useState<BaseStateType>({
    angular: {
      list: [],
      page: 0,
    },
    reactjs: {
      list: [],
      page: 0,
    },
    vuejs: {
      list: [],
      page: 0,
    }
  });

  useEffect(() => {
    if (query) {
      fetchData(query, { page: 0 });
    }
  }, []);

  const fetchData = (query: ValueOptions, { page = 0 }) => {
    if (loading[query]) return;
    setLoading({ ...loading, [query]: true });

    return fetcher<HNQuery>(query, { page })
      .then(data => {
        setArticles({
          ...articles,
          [query]: {
            list: [...articles[query].list, ...data.hits],
            page: data.page,
          }
        });
        return data;
      })
      .finally(() => {
        setLoading({ ...loading, [query]: false });
      });
  };

  return {
    articles: query ? articles[query] : {} as BaseStateType[ValueOptions],
    loading: query ? loading[query] : {} as LoadingStateType[ValueOptions],
    fetchData,
  };
}