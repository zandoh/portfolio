import React from "react";
import { ReactComponent as IconGithub } from "../../assets/github.svg";
import { ReactComponent as IconLinkedIn } from "../../assets/linkedin.svg";
import { ReactComponent as IconTwitter } from "../../assets/twitter.svg";
import { AppLink } from "../AppLink/AppLink";
import Avatar from "avataaars";
import {
  AboutWrapper,
  AboutDescriptionContainer,
  AboutAvatarContainer,
  AboutTitle,
  AboutDescription,
  AboutIconContainer
} from './styled'
import { svgStyle } from "../Hero/styled";

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
            child={
              <IconGithub
                style={svgStyle}
                width={width}
                height={height}
              />
            }
          />
          <AppLink
            link={linkedinLink}
            title={"LinkedIn Profile"}
            child={
              <IconLinkedIn
                style={svgStyle}
                width={width}
                height={height}
              />
            }
          />
          <AppLink
            link={twitterLink}
            title={"Twitter Profile"}
            child={
              <IconTwitter
                style={svgStyle}
                width={width}
                height={height}
              />
            }
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
