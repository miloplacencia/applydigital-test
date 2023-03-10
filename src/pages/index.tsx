import { useContext, useRef } from "react";

import CardComponent from "../components/card/card";
import { LoadingIcon } from "../components/icons/loading";
import InfinityScroll from "../components/infinityscroll/infinity";

import useLikes from "../hooks/likes";
import StoreContext from "../hooks/store";

export default function Index() {
  const { articles, loading, fetch, selectedOption } = useContext(StoreContext);
  const { updateLikes, isLiked } = useLikes();

  const root = useRef<HTMLDivElement>(null);

  return (
    <div id="index" className="grid" ref={root}>
      {!selectedOption && <em>Select one news source in the select</em>}
      {selectedOption && loading && <LoadingIcon width={48} height={48} />}

      {articles.list?.map((article) => (
        <CardComponent
          key={article.objectID}
          title={article.story_title}
          link={article.story_url}
          author={article.author}
          date={article.created_at}
          liked={isLiked(article)}
          onClickLike={() => updateLikes(article)}
        />
      ))}

      {!loading && <InfinityScroll fetch={() => fetch(articles.page + 1)} />}
    </div>
  );
}
