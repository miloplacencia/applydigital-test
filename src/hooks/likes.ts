import { useEffect, useState } from "react";
import storage from "../helpers/storage";
import { Hit } from "../interfaces/hackernews_query";

const useLikes = () => {
  const [likes, setLikes] = useState<Hit[]>([]);

  const updateLikes = (newlike: Hit) => {
    let newlikes: Hit[] = [];

    if (likes.findIndex((like) => newlike.objectID === like.objectID) > -1) {
      newlikes = (likes.filter((like) => like.objectID !== newlike.objectID));
    } else {
      newlikes = ([...likes, newlike]);
    }

    setLikes(newlikes);
    storage.set('likes', newlikes);
  };

  const isLiked = (liked: Hit) => likes.findIndex(like => like.objectID === liked.objectID) > -1;

  useEffect(() => {
    const likes = storage.get('likes');
    if (likes) {
      setLikes(likes);
    }
  }, []);

  return {
    likes,
    updateLikes,
    isLiked,
  };
}

export default useLikes;