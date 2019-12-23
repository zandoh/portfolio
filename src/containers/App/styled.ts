import styled, { createGlobalStyle } from "styled-components";
import { Element } from "react-scroll";

export const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
    background: #000;
  }
  body{
    height: 100%;
    margin: 0;
    padding: 0;
  }
  :root: {
    font-size: 16px;
    ${props => props.theme.mediaQuery.s} {
      font-size: 13px;
    },
    ${props => props.theme.mediaQuery.xs} {
      font-size: 10px;
    }
  }
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  ${props => props.theme.mediaQuery.l} {
    flex-direction: column;
  }
`;

export const AppSection = styled(Element)`
  position: relative;
  z-index: 1;
  min-height: 100vh;
  margin-bottom: 150px;
  &:last-of-type {
    margin-bottom: 0;
  }
  & > * {
    min-height: 100vh;
    height: 100%;
    overflow: hidden;
  }
`;
