"use client";
import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import PostList from "../components/PostList";
import { getAllPosts } from "../service/posts.service";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPostsFun();
  }, []);

  const getAllPostsFun = async () => {
    try {
      const response = await getAllPosts(false);
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PostList>
      {posts?.map((post: any, index: any) => (
        <div key={index}>
          <Post
            id={post._id}
            profileImage={post?.profileImage}
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

export default Home;
