import styled from "styled-components";
import { AppLink } from "../AppLink/AppLink";

export const ProjectsContainer = styled.section`
  background: ${props => props.theme.palette.background};
  padding: 150px 100px 25px;
  ${props => props.theme.mediaQuery.s} {
    padding: 150px 50px 25px;
  }
`;

export const ProjectsTitle = styled.h1`
  margin: 0px 0px 12px 0px;
  font-size: 42px;
  font-family: ${props => props.theme.typeography.fontStack.roboto};
  font-display: auto;
  font-weight: 700;
  color: ${props => props.theme.palette.textInvert};
  letter-spacing: 2px;
  text-transform: lowercase;
`;

export const ProjectsDescription = styled.p`
  width: 30%;
  margin: 0px 0px;
  font-family: ${props => props.theme.typeography.fontStack.roboto};
  font-display: auto;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  color: ${props => props.theme.palette.textInvertLight};
  ${props => props.theme.mediaQuery.l} {
    width: 50%;
  }
  ${props => props.theme.mediaQuery.s} {
    width: 100%;
  }
`;

export const ProjectsImageListWrapper = styled.div`
  display: flex;
  padding: 70px 0 0;
`;

export const ProjectsListContainer = styled.div`
  flex: 1 1 50%;
  margin: 0 auto;
  padding-right: 75px;
  ${props => props.theme.mediaQuery.l} {
    flex: 1 1 100%;
  }
  ${props => props.theme.mediaQuery.s} {
    padding-right: 0;
  }
`;

export const ProjectsImageContainer = styled.div`
  flex: 1 1 50%;
  margin-top: -200px;
`;

export const ProjectsListLink = styled(AppLink)`
  text-decoration: none;
  font-weight: 700;
  font-size: 26px;
  line-height: 32px;
  word-break: break-word;
  padding: 0;
  & > h2 {
    color: ${props => props.theme.palette.textInvert};
    transition: color 0.2s ease;
    font-family: ${props => props.theme.typeography.fontStack.roboto};
    font-display: auto;
    text-transform: lowercase;
    margin: 0;
    padding: 0;
    font-size: 100%;
    outline: none;
    vertical-align: baseline;
    background: transparent;
    &:hover {
      color: ${props => props.theme.palette.textInvertHover};
    }
  }
`;

export const ProjectsListArticle = styled.article`
  display: flex;
  justify-content: flex-end;
  padding: 25px 0;
  width: 100%;
  ${props => props.theme.mediaQuery.l} {
    justify-content: flex-start;
  }
`;

export const ProjectsProjectImage = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 510px;
  max-height: 720px;
  overflow: hidden;
`;
