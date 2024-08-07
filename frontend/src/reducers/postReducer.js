import { createReducer } from "@reduxjs/toolkit";
import {
    NEW_POST_FAIL,
    NEW_POST_REQUEST,
    NEW_POST_RESET,
    NEW_POST_SUCCESS,
    CLEAR_ERRORS,
    MYFEED_POSTS_REQUEST,
    MYFEED_POSTS_SUCCESS,
    MYFEED_POSTS_FAIL,
    MYFEED_POSTS_RESET
} from "../constants/postConstants";

export const newPostReducer = createReducer({ post: {} }, (builder) => {
    builder
        .addCase(NEW_POST_REQUEST, (state) => {
            state.loading = true;
        })
        .addCase(NEW_POST_SUCCESS, (state, action) => {
            state.loading = false;
            state.success = true;
            state.post = action.payload.newPost;
        })
        .addCase(NEW_POST_FAIL, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(NEW_POST_RESET, (state) => {
            state.success = false;
            state.error = null
        })
        .addCase(CLEAR_ERRORS, (state) => {
            state.error = null;
        });
});


export const myfeedPostsReducer = createReducer({ posts: [] }, (builder) => {
    builder
        .addCase(MYFEED_POSTS_REQUEST, (state) => {
            state.loading = true;
        })
        .addCase(MYFEED_POSTS_SUCCESS, (state, action) => {
            state.loading = false;
            state.success = true;
            state.posts = action.payload;
        })
        .addCase(MYFEED_POSTS_FAIL, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(MYFEED_POSTS_RESET, (state) => {
            state.success = false;
            state.error = null
        })
        .addCase(CLEAR_ERRORS, (state) => {
            state.error = null;
        });
});


