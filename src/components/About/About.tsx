import React from "react";
import { AppLink } from "../AppLink/AppLink";
import Avatar from "avataaars";
import {
  AboutWrapper,
  AboutDescriptionContainer,
  AboutAvatarContainer,
  AboutTitle,
  AboutDescription,
  AboutIconContainer,
  StyledIconGithub,
  StyledIconLinkedIn,
  StyledIconTwitter
} from "./styled";

const width: number = 50;
const height: number = 50;
const githubLink = "https://github.com/zandoh";
const linkedinLink = "https://www.linkedin.com/in/zrclark/";
const twitterLink = "https://twitter.com/Zandoh_";

const About: React.FC<{}> = () => {
  return (
    <AboutWrapper>
      <AboutDescriptionContainer>
        <AboutTitle>About Me.</AboutTitle>
        <AboutDescription>
          I'm an RIT graduate from Upstate, NY. I'm very passionate about web
          development and hockey. My favorite professional hockey team is the
          Pittsburgh Penguins. My favorite player is Evgeni Malkin.
        </AboutDescription>
        <AboutIconContainer>
          <AppLink
            link={githubLink}
            title={"GitHub Profile"}
            child={<StyledIconGithub width={width} height={height} />}
          />
          <AppLink
            link={linkedinLink}
            title={"LinkedIn Profile"}
            child={<StyledIconLinkedIn width={width} height={height} />}
          />
          <AppLink
            link={twitterLink}
            title={"Twitter Profile"}
            child={<StyledIconTwitter width={width} height={height} />}
          />
        </AboutIconContainer>
      </AboutDescriptionContainer>
      <AboutAvatarContainer>
        <Avatar
          avatarStyle="Transparent"
          topType="ShortHairShortCurly"
          accessoriesType="Prescription02"
          hairColor="BrownDark"
          facialHairType="Blank"
          clotheType="Hoodie"
          clotheColor="Blue01"
          eyeType="Default"
          eyebrowType="DefaultNatural"
          mouthType="Default"
          skinColor="Pale"
        />
      </AboutAvatarContainer>
    </AboutWrapper>
  );
};

export default About;
