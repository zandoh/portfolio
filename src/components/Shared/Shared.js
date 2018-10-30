import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props =>
      props.theme.backgroundColor ? props.theme.backgroundColor : "#fff"};
  }
`;

const AppSection = styled.section`
  min-height: ${props => (props.height ? props.height : "100vh")};
  width: ${props => (props.width ? props.width : "100vw")};
  display: ${props => (props.display ? props.display : "flex")};
  flex: ${props => (props.flex ? props.flex : "0 1 auto")};
  flex-direction: ${props => (props.flexDir ? props.flexDir : "column")};
  flex-wrap: ${props => (props.flexWrap ? props.flexWrap : "")};
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
  },
  {
    // blue on black
    backgroundColor: "#2E382E",
    fontColor: "#5CC8FF",
    particleColor: "#5CC8FF"
  },
  {
    // purple on white
    backgroundColor: "#fff",
    fontColor: "#9883E5",
    particleColor: "#9883E5"
  },
  {
    // pens colors - yellow on black
    backgroundColor: "#FCB514",
    fontColor: "#000",
    particleColor: "#000"
  },
  {
    // blue on white
    backgroundColor: "#fff",
    fontColor: "#357DED",
    particleColor: "#357DED"
  },
  {
    // white on green
    backgroundColor: "#44AF69",
    fontColor: "#fff",
    particleColor: "#fff"
  },
  {
    // green on black
    backgroundColor: "#00171F",
    fontColor: "#8AEA92",
    particleColor: "#8AEA92"
  }
];

export { GlobalStyle, AppSection, themes };
