import React from "react";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { PostProps } from "../../shared/interfaces";

const Post = ({
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
}: PostProps) => (
  <PostContainer>
    <PostHeader>
      <ProfileImage src={profileImage} alt={username} />
      <Username>{username}</Username>
    </PostHeader>
    <ImageContainer>
      <PostImage src={postImage} alt="Post Image" />
      <ImageContent>
        <div>
          <PostTitle>{postTitle}</PostTitle>
          <Price>{price && <div>{price}</div>}</Price>
        </div>

        <HeartIconContainer>
          {isFavourite ? (
            <AiFillHeart />
          ) : (
            <AiOutlineHeart style={{ color: "white" }} />
          )}
        </HeartIconContainer>
      </ImageContent>
    </ImageContainer>
    <PostContent>
      <LikeComment>
        <LikeIcon>
          <FaHeart />
        </LikeIcon>
        {likes} likes
      </LikeComment>
      {content}
      <HashTags>{hashtags}</HashTags>
      <Comments>View {totalNumberOfCommends} comments</Comments>
    </PostContent>
  </PostContainer>
);

export default Post;

const PostContainer = styled.div`
  margin-bottom: 20px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f8f8f8;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  max-width: 40px;
  max-height: 40px;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  object-fit: cover;
`;

const Username = styled.div`
  font-weight: bold;
`;

const PostImage = styled.img`
  width: 100%;
  height: auto;
`;

const PostContent = styled.div`
  padding: 10px;
`;

const LikeComment = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: #007aff;
`;

const LikeIcon = styled.div`
  color: #007aff;
  margin-right: 5px;
`;

const HashTags = styled.div`
  color: #007aff;
  margin-top: 5px;
`;

const Comments = styled.div`
  margin-top: 10px;
  font-size: 12px;
  color: gray;
`;

const ImageContainer = styled.div`
  display: flex;
  position: relative;
`;

const ImageContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  align-items: center;
`;

const PostTitle = styled.div`
  position: relative;
`;

const Price = styled.div`
  position: relative;
  font-weight: bold;
  margin-bottom: 5px;
`;

const HeartIconContainer = styled.div`
  display: inline-flex;
  font-size: 2rem;
  color: ${({ isFavourite }: any) => (isFavourite ? "#007aff" : "#000")};
  cursor: pointer;

  transition: color 0.3s ease;

  &:hover {
    color: ${({ isFavourite }: any) => (isFavourite ? "#005bb5" : "#666")};
  }
`;
