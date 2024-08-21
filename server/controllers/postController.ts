import { Request, Response } from "express";
import Post from "../models/Post";
import { errorMessage, successMessage } from "../utils/responseHandler";
import { validatePostData } from "../utils/helper";

export const createPost = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const validationError = validatePostData(req.body);
    if (validationError) {
      return errorMessage(res, validationError, 400);
    }

    const {
      profileImage,
      username,
      postImage,
      postTitle,
      price,
      isFavourite,
      content,
      likes,
      hashtags,
      totalNumberOfCommends,
    } = req.body;

    const post = new Post({
      profileImage,
      username,
      postImage,
      postTitle,
      price,
      isFavourite,
      content,
      likes,
      hashtags,
      totalNumberOfCommends,
    });

    await post.save();
    return successMessage(post, res);
  } catch (err) {
    console.error("Error creating post:", err);
    return errorMessage(res, "Server error", 500);
  }
};

export const getPosts = async (req: Request, res: Response): Promise<void> => {
  try {
    const { isFavourite } = req.query;
    const filter: any = {};

    if (isFavourite !== undefined) {
      filter.isFavourite = isFavourite === "true";
    }

    const posts = await Post.find(filter);
    return successMessage(posts, res);
  } catch (err) {
    console.error("Error fetching posts:", err);
    return errorMessage(res, "Server error", 500);
  }
};

export const updatePost = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return errorMessage(res, "Post not found", 404);
    }

    Object.assign(post, req.body);
    await post.save();
    return successMessage(post, res);
  } catch (err) {
    console.error("Error updating post:", err);
    return errorMessage(res, "Server error", 500);
  }
};

export const deletePost = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return errorMessage(res, "Post not found", 404);
    }

    await Post.deleteOne({ _id: post._id });
    return successMessage(post, res, "Post deleted");
  } catch (err) {
    console.error("Error deleting post:", err);
    return errorMessage(res, "Server error", 500);
  }
};

export const addFavorite = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return errorMessage(res, "Post not found", 404);
    }

    post.isFavourite = true;
    await post.save();
    return successMessage(post, res, "Post added to favorites");
  } catch (err) {
    console.error("Error adding favorite:", err);
    return errorMessage(res, "Server error", 500);
  }
};
