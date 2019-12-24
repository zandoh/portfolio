import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Switch from "react-switch";

const parallax = `
  min-height: 100%;
  min-width: 100%;
  position: fixed;
  z-index: -1;
`;

export const svgStyle = {
  height: "20px",
  width: "20px",
  position: "absolute" as "absolute",
  top: "6px",
  right: "4px"
};

export const temp = `
  height: 20px;
  width: 20px;
  position: absolute;
  top: 6px;
  right: 4px;
`;

export const HeroMainSection = styled.section`
  height: 100%;
  left: 0;
  position: relative;
  top: 0;
  width: 100%;
  display: table;
  z-index: 1;
`;

export const HeroVideo = styled.video`
  position: fixed;
  z-index: -1;
  ${parallax}
  @media (min-aspect-ratio: 16:9) {
    width: 100%;
    height: auto;
  }
  @media (max-aspect-ratio: 16:9) {
    width: auto;
    height: 100%;
  }
  ${props => props.theme.mediaQuery.m} {
    left: -50%;
    top: -25%;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  padding-top: 200px;
  justify-content: center;
  width: 100vw;
  font-family: ${props => props.theme.typeography.fontStack.roboto};
  font-display: auto;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  ${parallax}
`;

export const HeroCopyContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
  width: 500px;
  ${props => props.theme.mediaQuery.s} {
    width: 70%;
  }
`;

export const HeroTagLine = styled.h1`
  font-size: 4.875em;
  font-weight: 500;
  color: ${props => props.theme.palette.text};
  padding: 0;
  margin: 0;
`;

export const HeroDescription = styled.p`
  font-size: 1.75em;
  line-height: 42px;
  color: ${props => props.theme.palette.text};
  padding: 0;
  margin: 0;
`;

export const HeroContrastText = styled.span`
  color: ${props => props.theme.palette.contrastText};
`;

export const HeroArrow = styled(FontAwesomeIcon)`
  display: block;
  color: ${props => props.theme.palette.text};
  text-align: center;
  margin: 50px auto 0 auto;
  &:hover {
    cursor: pointer;
  }
`;

export const HeroSwitch = styled(Switch)`
  position: absolute !important;
  top: 25px;
  right: 25px;
`;
