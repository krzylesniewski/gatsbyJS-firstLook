import React from "react"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
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

const SyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #906090;
`;

const H1 = styled.h1`
  margin: 0;
  padding: 0;
`;

const IndexPage = () => (
  <>
    <GlobalStyle />
    <SyledWrapper>
      <H1>Hello World</H1>
    </SyledWrapper>
  </>
)

export default IndexPage
