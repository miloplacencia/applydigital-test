import { relativeDate } from "../../helpers/date";
import { ClockIcon } from "../icons/clock";
import { HeartFullIcon } from "../icons/heart-full";
import { HeartLineIcon } from "../icons/heart-line";
import "./card.css";

export default function CardComponent({
  liked = false,
  date = new Date(),
  title,
  link,
  author = "Author",
  onClickLike,
}: {
  liked: boolean;
  title: string;
  date: Date;
  author: string;
  link: string | null;
  onClickLike: () => void;
}) {
  const formattedDate = date ? relativeDate(new Date(date)) : "";

  return (
    <div className="card">
      <div className="card-content">
        <div className="card-date">
          <ClockIcon height="1rem" width="1rem" />
          <span>
            {formattedDate} ago by {author}
          </span>
        </div>
        <p className="card-text">
          <a
            {...(link && { href: link })}
            rel="noopener noreferrer"
            target="_blank"
          >
            {title ? title : <em>No Title</em>}
          </a>
        </p>
      </div>
      <div className="card-likebtn">
        <button onClick={onClickLike}>
          {liked ? (
            <HeartFullIcon height="1.375rem" width="1.5rem" />
          ) : (
            <HeartLineIcon height="1.375rem" width="1.5rem" />
          )}
        </button>
      </div>
    </div>
  );
}
