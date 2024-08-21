import { Request, Response } from "express";
import Post from "../models/Post";
import { errorMessage, successMessage } from "../utils/responseHandler";

interface AuthRequest extends Request {
  user?: any;
}

export const createPost = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
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

export const getPosts = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const posts = await Post.find();
    return successMessage(posts, res);
  } catch (err) {
    console.error("Error fetching posts:", err);
    return errorMessage(res, "Server error", 500);
  }
};

export const updatePost = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return errorMessage(res, "Post not found", 404);
    }

    post.profileImage = req.body.profileImage || post.profileImage;
    post.username = req.body.username || post.username;
    post.postImage = req.body.postImage || post.postImage;
    post.postTitle = req.body.postTitle || post.postTitle;
    post.price = req.body.price || post.price;
    post.isFavourite = req.body.isFavourite || post.isFavourite;
    post.content = req.body.content || post.content;
    post.likes = req.body.likes || post.likes;
    post.hashtags = req.body.hashtags || post.hashtags;
    post.totalNumberOfCommends =
      req.body.totalNumberOfCommends || post.totalNumberOfCommends;

    await post.save();
    return successMessage(post, res);
  } catch (err) {
    console.error("Error updating post:", err);
    return errorMessage(res, "Server error", 500);
  }
};

export const deletePost = async (
  req: AuthRequest,
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
  req: AuthRequest,
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
