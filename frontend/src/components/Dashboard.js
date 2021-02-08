import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, selectPosts } from "../features/posts/postsSlice";
import "./Dashboard.scss";
import { PostCard } from "./PostCard";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return (
    <div className="dashboard">
      <div className="container">
        <h1>Dashboard</h1>
        <div className="dashboard__grid">
          {posts?.map(
            ({ id, title, body, published, author, comments }) =>
              published && (
                <PostCard
                  key={id}
                  id={id}
                  title={title}
                  body={body}
                  author={author}
                  comments={comments}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};
