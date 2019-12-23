import styled from "styled-components";

export const ProjectsContainer = styled.section`
  color: ${props => console.log("props ", props)}
  background: ${props => props.theme.palette.background};
  padding: "150px 100px 25px";
  [${props => props.theme.mediaQuery.s}]: {
    padding: "150px 50px 25px";
  };
`;
