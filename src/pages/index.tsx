import React from "react";
import { Link } from 'gatsby';
import styled, { createGlobalStyle } from "styled-components";

import StyledLink from '../components/Common/StyledLink';
import MainWrapper from '../components/Layout/MainWrapper';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-weight: normal;
    font-family: 'Montserrat';
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

const H1:any = styled.h1`
  margin: 0;
  padding: 0;
  color: ${(props:any) => props.isRed ? 'red' : '#900690'};
`;

const IndexPage = () => (
  <>
    <GlobalStyle />
    <MainWrapper>
      <H1>Hello World asdasd</H1>
      <H1 isRed>Witaj świecie</H1>
      <StyledLink to='/about' text='O mnie'/>
    </MainWrapper>
  </>
)

export default IndexPage
