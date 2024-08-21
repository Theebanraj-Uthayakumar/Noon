import mongoose, { Document, Schema } from "mongoose";

export interface IPost extends Document {
  profileImage: string;
  username: string;
  postImage: string;
  postTitle: string;
  price: string;
  isFavourite: boolean;
  content: string;
  likes: number;
  hashtags: string;
  totalNumberOfCommends: number;
}

const PostSchema: Schema<IPost> = new mongoose.Schema(
  {
    profileImage: { type: String, required: true },
    username: { type: String, required: true },
    postImage: { type: String, required: true },
    postTitle: { type: String, required: true },
    price: { type: String, required: true },
    isFavourite: { type: Boolean, required: true },
    content: { type: String, required: true },
    likes: { type: Number, required: true },
    hashtags: { type: String, required: true },
    totalNumberOfCommends: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IPost>("Post", PostSchema);
