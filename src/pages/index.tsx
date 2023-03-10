import { useContext } from "react";

import CardComponent from "../components/card/card";
import { LoadingIcon } from "../components/icons/loading";

import useLikes from "../hooks/likes";
import StoreContext from "../hooks/store";

export default function Index() {
  const { articles, loading } = useContext(StoreContext);
  const { likes, updateLikes, isLiked } = useLikes();

  return (
    <div id="index" className="grid">
      {loading && <LoadingIcon width={48} height={48} />}
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
    </div>
  );
}
