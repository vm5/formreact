import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

// Styled components
const FooterContainer = styled.footer`
  background: #111;
  color: white;
  padding: 40px 20px;
  text-align: center;
  border-top: 1px solid #444;
  position: relative;
  width: 100%;
  font-family: 'Verdana';
  animation: ${fadeIn} 1s ease-in-out;
  margin-left:18px;
`;

const HighlightedText = styled.span`
  color: #6a1b9a;
  font-weight: bold;
`;

const AdditionalContent = styled.div`
  margin-top: 40px;
  font-size: 16px;
  animation: ${slideIn} 1s ease-out;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }

  p {
    margin-top: 20px;
    color: #ccc;
    line-height: 1.5;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: lightblue;
  transition: color 0.3s ease;
  display: inline-flex;
  align-items: center;

  &:hover {
    color: yellow;
  }

  img {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
`;

const Logo = styled.img`
  width: 150px;
  height: auto;
  margin: 30px auto;
  display: block;
`;
function Footer() {
  return (
    <FooterContainer>

      <Logo src="/nucleus.png" alt="nucleusFUSION Logo" />

      <LinkContainer>
       
        <Link href="https://nucleusfusioncontact.netlify.app/">
          <img src="/contactus-removebg-preview.png" alt="Contact Us" />
          Contact Us
        </Link>
      </LinkContainer>

      <AdditionalContent>
        <p>nucleus<HighlightedText>FUSION</HighlightedText>: Your go-to platform for establishing professional connections. Get the answers you need and stay informed with the latest insights!</p>
        <p>&copy; {new Date().getFullYear()} nucleus<HighlightedText>FUSION</HighlightedText>. All rights reserved.</p>
        <p>Version v1.0.0</p>
      </AdditionalContent>
    </FooterContainer>
  );
};

export default Footer;
