import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props =>
      props.theme.backgroundColor ? props.theme.backgroundColor : "#fff"};
  }
`;

const AppSection = styled.section`
  height: ${props => (props.height ? props.height : "100vh")};
  width: ${props => (props.width ? props.width : "100vw")};
  display: ${props => (props.display ? props.display : "flex")};
  flex: ${props => (props.flex ? props.flex : "0 1 auto")};
  flex-direction: ${props => (props.flexDir ? props.flexDir : "column")};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "center"};
  overflow: hidden;
`;

const themes = [
  {
    // yellow on blue
    backgroundColor: "#2b4162",
    fontColor: "#fa9f42",
    particleColor: "#fff"
  },
  {
    // white on red
    backgroundColor: "#721817",
    fontColor: "#fff",
    particleColor: "#fff"
  },
  {
    // green on white
    backgroundColor: "#fff",
    fontColor: "#0B6E4F",
    particleColor: "#0B6E4F"
  },
  {
    // red on black
    backgroundColor: "#35393C",
    fontColor: "#88292F",
    particleColor: "#fff"
  }
];

export { GlobalStyle, AppSection, themes };
