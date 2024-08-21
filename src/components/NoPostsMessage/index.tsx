import React from "react";
import styled from "styled-components";

const NoPostsMessageContainer = styled.p`
  text-align: center;
  font-size: 1.5rem;
  color: #666;
  margin-top: 50px;
`;

interface NoPostsMessageProps {
  message: string;
}

export const NoPostsMessage: React.FC<NoPostsMessageProps> = ({ message }) => {
  return <NoPostsMessageContainer>{message}</NoPostsMessageContainer>;
};
