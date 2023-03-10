// Components
import CardComponent from "../components/card/card";

// Hooks
import useLikes from "../hooks/likes";

export default function Favorites() {
  const { likes, updateLikes, isLiked } = useLikes();

  return (
    <div id="index" className="grid">
      {likes?.map((like) => (
        <CardComponent
          key={like.objectID}
          title={like.story_title}
          link={like.story_url}
          author={like.author}
          date={like.created_at}
          liked={isLiked(like)}
          onClickLike={() => updateLikes(like)}
        />
      ))}
    </div>
  );
}
