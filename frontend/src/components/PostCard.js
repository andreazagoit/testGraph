import React from "react";
import "./PostCard.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

export const PostCard = ({ id, title, body, author, comments }) => {
  const [commentEnabled, setCommentEnabled] = useState(false);

  return (
    <div className="postCard">
      <div className="postCard__header">
        <h2>{title}</h2>
        <Link to={`/user/${author.name}`}>
          <p>{author?.name}</p>
        </Link>
      </div>
      <div className="postCard__content">
        <p className="postCard__body">{body}</p>
      </div>
      <div className="postCard__actions">
        <button
          onClick={() => setCommentEnabled(!commentEnabled)}
          disabled={comments.length == 0}
        >
          {comments?.length} Comments
        </button>
      </div>
      {commentEnabled && (
        <div className="postCard__comments">
          {comments?.map((comment) => (
            <div className="postCard__commentsComment">
              <p>
                <Link to={`/user/${comment?.author?.name}`}>
                  {comment?.author?.name}
                </Link>{" "}
                {comment.text}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
