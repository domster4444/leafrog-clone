import React from 'react';
import Container from 'components/Container';
import ContainerCenter from 'components/ContainerCenter';

import { IoIosArrowDown } from 'react-icons/io';

import styled, { css } from 'styled-components';
import Button from 'components/Button';

const HomeContainer = styled.section`
  position: relative;
  background-image: url('https://i.imgur.com/1a6VQRn_d.webp?maxwidth=760&fidelity=grand');
  background-size: cover;
  background-position: center;
  padding: 13rem 0rem;

  /* for less than tablet */
  @media only screen and (max-width: 768px) {
    padding: 5rem 2rem;
  }
  background-color: var(--primary-navy-light);
`;

interface HomeTitleProps {
  highlight?: boolean;
}

const HomeTitle = styled.h2<HomeTitleProps>`
  font-size: 8rem;
  @media only screen and (max-width: 768px) {
    font-size: 6rem;
  }
  line-height: 7.5rem;

  ${(props: HomeTitleProps) => {
    if (props.highlight) {
      return css`
        text-decoration: underline;
      `;
    }
  }}
  color: ${(props) =>
    props.highlight
      ? css`
  var(--primary-green)  

  

  `
      : css`
      var(--primary-white)
      `};
`;

const HomeParagraph = styled.p`
  margin: 4rem 0rem;

  font-size: 2.2rem;
  @media only screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
  color: white;
  word-wrap: break-word;
  width: 50%;
  @media only screen and (max-width: 768px) {
    width: 70%;
  }
  @media only screen and (max-width: 470px) {
    width: 90%;
  }
`;

const HomeScrollIconContainer = styled.div`
  position: absolute;
  bottom: 2.5rem;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  svg {
    &:hover {
      transform: scale(1.2);
    }
    cursor: pointer;
    color: white;
    font-size: 3.5rem;
  }
`;

const HeroButtonContainer = styled.div`
  display: flex;
`;

const LearnMoreBlock = styled.div`
  margin: 0rem 2rem;
  p {
    color: white;
    font-size: 1.4rem;
  }
  a {
    font-size: 1.7rem;
    color: var(--primary-green);
    &:hover {
      color: var(--primary-dark-green);
    }
  }
`;
const Home = () => {
  return (
    <HomeContainer>
      <Container>
        <HomeTitle>Innovate better,</HomeTitle>
        <HomeTitle highlight>faster.</HomeTitle>
        <HomeParagraph>
          We help business imagine and create the digital experience of
          tomorrow. We succeed together by blending the best of
          entrepreneurship, startup thinking, and world-class engineering.
        </HomeParagraph>

        <HeroButtonContainer>
          <Button type="secondary">GET STARTED</Button>
          <LearnMoreBlock>
            <p>Want to know how we stand out?</p>
            <a href="#">Learn more</a>
          </LearnMoreBlock>
        </HeroButtonContainer>

        <HomeScrollIconContainer>
          <IoIosArrowDown />
        </HomeScrollIconContainer>
      </Container>
    </HomeContainer>
  );
};

export default Home;
