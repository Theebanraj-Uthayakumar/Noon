"use client";
import React from "react";
import styled from "styled-components";
import { FaHome, FaHeart } from "react-icons/fa";
import Link from "next/link";

const FooterNav = () => {
  return (
    <FooterContainer>
      <NavIcon>
        <Link href="/" passHref>
          <FaHome />
        </Link>
      </NavIcon>
      <NavIcon>
        <Link href="/favourites" passHref>
          <FaHeart />
        </Link>
      </NavIcon>
    </FooterContainer>
  );
};

export default FooterNav;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: #ff69b4;
  border-top: 1px solid #e1e1e1;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 585px;
`;

const NavIcon = styled.div`
  font-size: 24px;
  color: #f8f8f8;
  cursor: pointer;
`;
