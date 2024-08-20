"use client";
import React from "react";
import Post from "../../components/Post";
import PostList from "../../components/PostList";

const Favorites = () => {
  return (
    <PostList>
      <Post
        profileImage="./profile/LinkedIn Profile Picture.jpg"
        username="tracymcgrady"
        postImage="./post/Liza Summer Post.jpg"
        postTitle={"Liza Summer Post"}
        price="AED 200"
        isFavourite={true}
        content="Leaf iPhone Case Hard Plastic AED 230 #iphone #cases"
        likes={32}
        hashtags="#iphone #cases"
        totalNumberOfCommends={12}
      />
      <Post
        profileImage="./profile/Profile Picture Minan1398.jpg"
        username="theodorelincoln"
        postImage="./post/Post Photos Ernest Westphal.jpg"
        postTitle="Post Photos Ernest Westphal"
        price="AED 300"
        isFavourite={true}
        content="Awesome Thor Movie Poster"
        likes={100}
        hashtags="#thor #movie"
        totalNumberOfCommends={50}
      />
    </PostList>
  );
};

export default Favorites;
