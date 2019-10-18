import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  position: absolute;
  z-index: 1000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #00d2c8;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    margin-top: 164px;
    padding: 10px;
    text-align: center;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    font-size: 36px;
  }

  li {
    padding: 20px 0 0 0;
  }

  a {
    color: #28283c;
    text-decoration: none;
  }
`;

function Navigation() {
  return (
    <Nav>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <a href="mailto:digital@pendulum.ai">Contact</a>
          </li>
        </ul>
      </div>
    </Nav>
  );
}

export default Navigation;
