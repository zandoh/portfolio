import styled from "styled-components";
import { ReactComponent as IconGithub } from "../../assets/github.svg";
import { ReactComponent as IconLinkedIn } from "../../assets/linkedin.svg";
import { ReactComponent as IconTwitter } from "../../assets/twitter.svg";

export const StyledIconTwitter = styled(IconTwitter)`
  margin-right: 50px;
  transition: color 0.2s ease;
  fill: ${props => props.theme.palette.textInvert};
  &:hover {
    fill: ${props => props.theme.palette.textInvertHover};
  }
  ${props => props.theme.mediaQuery.l} {
    margin-right: 0;
  }
`;
export const StyledIconLinkedIn = styled(IconLinkedIn)`
  margin-right: 50px;
  transition: color 0.2s ease;
  fill: ${props => props.theme.palette.textInvert};
  &:hover {
    fill: ${props => props.theme.palette.textInvertHover};
  }
  ${props => props.theme.mediaQuery.l} {
    margin-right: 0;
  }
`;
export const StyledIconGithub = styled(IconGithub)`
  margin-right: 50px;
  transition: color 0.2s ease;
  fill: ${props => props.theme.palette.textInvert};
  &:hover {
    fill: ${props => props.theme.palette.textInvertHover};
  }
  ${props => props.theme.mediaQuery.l} {
    margin-right: 0;
  }
`;

export const AboutWrapper = styled.section`
  display: flex;
  height: 50%;
  & > * {
    height: auto;
    flex: 1 1 50%;
  }
  ${props => props.theme.mediaQuery.l} {
    flex-direction: column-reverse;
    height: auto;
  }
`;

export const AboutDescriptionContainer = styled.div`
  background: ${props => props.theme.palette.backgroundInvert};
  padding: 150px 100px 25px;
  color: ${props => props.theme.palette.textInvert};
  ${props => props.theme.mediaQuery.s} {
    padding: 150px 50px 25px;
  }
`;

export const AboutAvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  & > svg {
    height: 500px;
    width: 500px;
    ${props => props.theme.mediaQuery.l} {
      height: 280px;
      width: 280px;
    }
  }
`;

export const AboutTitle = styled.h2`
  margin: 0px 0px 12px 0px;
  font-size: 42px;
  font-family: ${props => props.theme.typeography.fontStack.roboto};
  font-display: auto;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: lowercase;
`;

export const AboutDescription = styled.p`
  margin: 0px 0px 18px 0px;
  font-family: ${props => props.theme.typeography.fontStack.roboto};
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
`;

export const AboutIconContainer = styled.div`
  margin-top: 200px;
  ${props => props.theme.mediaQuery.l} {
    display: flex;
    justify-content: space-between;
  }
`;
