import { Router } from "express";
import {
  createPost,
  getPosts,
  updatePost,
  deletePost,
  addFavorite,
} from "../controllers/postController";

const router = Router();

router.post("/create-post", createPost);
router.get("/get-posts", getPosts);
router.put("/update-post/:id", updatePost);
router.delete("/delete-post/:id", deletePost);
router.put("/add-favorite/:id", addFavorite);


export default router;
