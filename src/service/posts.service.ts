import ApiConstants from "../shared/constants/apiConstants";
import { PostProps } from "../shared/interfaces";
import CommonService from "./common.service";

export const getAllPosts = async (isFavourite: boolean) => {
  const response = await CommonService?.invokeHttpCallFetch(
    "GET",
    `${ApiConstants?.GET_POST_API}?isFavourite=${isFavourite}`
  );
  return response;
};

export const createPost = async (note: PostProps) => {
  const response = await CommonService?.invokeHttpCallFetch(
    "POST",
    ApiConstants?.CREATE_POST_API,
    note
  );
  return response;
};

export const updatePost = async (id: string, note: PostProps) => {
  const response = await CommonService?.invokeHttpCallFetch(
    "PUT",
    `${ApiConstants?.UPDATE_POST_API}/${id}`,
    note
  );
  return response;
};

export const deletePost = async (id: string) => {
  const response = await CommonService?.invokeHttpCallFetch(
    "DELETE",
    `${ApiConstants?.DELETE_POST_API}/${id}`
  );
  return response;
};

export const addFavorite = async (id: string) => {
  const response = await CommonService?.invokeHttpCallFetch(
    "PUT",
    `${ApiConstants?.ADD_FAVORITE_API}/${id}`
  );
  return response;
};
