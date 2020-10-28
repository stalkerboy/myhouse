import { createAsyncAction } from "typesafe-actions";
import { Blog } from "../../api/blog";
import { AxiosError } from "axios";

export const GET_BLOG_LIST = "blog/GET_BLOG_LIST";
export const GET_BLOG_LIST_SUCCESS = "blog/GET_BLOG_LIST_SUCCESS";
export const GET_BLOG_LIST_ERROR = "blog/GET_BLOG_LIST_ERROR";

export const getBlogListAsync = createAsyncAction(GET_BLOG_LIST, GET_BLOG_LIST_SUCCESS, GET_BLOG_LIST_ERROR)<number, Blog[], AxiosError>();
