"use client";
import React from "react";
import styled from "styled-components";
import { FaHome, FaHeart } from "react-icons/fa";
import Link from "next/link";

const FooterNav = () => {
  return (
    <FooterContainer>
      <NavIcon>
        <Link
          href="/"
          passHref
          style={{ display: "flex", flexDirection: "row", gap: "10px" }}
        >
          <FaHome />
          <NavLabel>Home</NavLabel>
        </Link>
      </NavIcon>
      <NavIcon>
        <Link
          href="/favourites"
          passHref
          style={{ display: "flex", flexDirection: "row", gap: "10px" }}
        >
          <FaHeart />
          <NavLabel>Liked</NavLabel>
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

  @media (min-width: 600px) {
    top: 0;
    bottom: auto;
    // padding: 20px;
  }
`;

const NavIcon = styled.div`
  font-size: 24px;
  color: #f8f8f8;
  cursor: pointer;
`;

const NavLabel = styled.span`
  display: none;
  font-size: 12px;
  color: #f8f8f8;
  margin-top: 4px;

  @media (min-width: 600px) {
    display: block;
  }
`;
