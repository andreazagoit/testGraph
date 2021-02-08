import { createSlice } from "@reduxjs/toolkit";
import { request, gql } from "graphql-request";
import { GET_POSTS } from "../../graphql/query";
import client from "../../graphql/clientConfig";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    value: [],
  },
  reducers: {
    setPosts: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setPosts } = postsSlice.actions;

export const getAllPosts = () => (dispatch) => {
  client
    .request(GET_POSTS)
    .then((data) => dispatch(setPosts(data.posts)))
    .catch((error) => {
      console.log("Errore nella ricezione dei dati da API", error);
    });
};

export const selectPosts = (state) => state.posts.value;

export default postsSlice.reducer;
