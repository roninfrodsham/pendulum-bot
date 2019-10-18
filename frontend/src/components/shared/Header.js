import React, { useState } from "react";
import styled from "styled-components";

import Navigation from "./Navigation";

const HeaderContainer = styled.div`
  position: relative;
  z-index: 2000;
  height: 164px;
  padding: 30px 0;

  @media (max-width: 768px) {
    height: 124px;
    padding: 20px 0;
  }

  button {
    float: right;
    background: transparent;
    border: 0;
    cursor: pointer;
    padding: 0;

    span {
      display: block;
      width: 30px;
      height: 3px;
      margin-bottom: 7px;
      background-color: #28283c;
    }
  }

  img {
    width: 120px;

    @media (max-width: 768px) {
      width: 100px;
    }
  }
`;

function Header() {
  const [toggleNav, setToggleNav] = useState(false);

  const toggleNavState = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <>
      {toggleNav && <Navigation />}
      <HeaderContainer>
        <button onClick={toggleNavState}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <img src="img/logo.svg" alt="Pendulum - Artificial Intelligence" />
      </HeaderContainer>
    </>
  );
}

export default Header;
