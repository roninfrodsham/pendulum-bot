import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  height: 80px;
  padding: 30px 0;

  @media (max-width: 768px) {
    height: 60px;
    padding: 20px 0;
  }

  p {
    margin: 0;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <p>©2019 Pendulum Digital Ltd.</p>
    </FooterContainer>
  );
}

export default Footer;
