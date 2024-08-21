"use client";
import React, { useEffect, useState } from "react";
import Post from "../../components/Post";
import PostList from "../../components/PostList";
import { getAllPosts } from "../../service/posts.service";
import { PostProps } from "../../shared/interfaces";
import { Loading } from "../../components/Spinner";
import { NoPostsMessage } from "../../components/NoPostsMessage";

const Favorites = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAllPostsFun();
  }, []);

  const getAllPostsFun = async () => {
    try {
      const response = await getAllPosts(true);
      setPosts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to load posts:", error);
      setError("Failed to load posts. Please try again later.");
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (posts.length === 0) {
    return <NoPostsMessage message="No favorite posts available." />;
  }

  return (
    <PostList>
      {posts.map((post: any, index: number) => (
        <div key={index}>
          <Post
            id={post._id}
            profileImage={post.profileImage}
            username={post.username}
            postImage={post.postImage}
            postTitle={post.postTitle}
            price={post.price}
            isFavourite={post.isFavourite}
            content={post.content}
            likes={post.likes}
            hashtags={post.hashtags}
            totalNumberOfCommends={post.totalNumberOfCommends}
            refreshPosts={getAllPostsFun}
          />
        </div>
      ))}
    </PostList>
  );
};

export default Favorites;
