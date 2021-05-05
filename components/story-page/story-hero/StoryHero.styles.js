import styled from 'styled-components';
import { max } from '../../../lib/responsive';
import { H1, P } from '../../../style/typography';
import { colors } from '../../../style/colors';

export const DesktopHero = styled.div`
  display: flex;
  padding: 4em;

  @media ${max.tabletLg} {
    padding-left: 2em;
    padding-right: 2em;
    width: 100%;
  }
`;

// Hero Left Section

export const HeroLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2em;
  margin-left: 5em;

  @media ${max.tabletLg} {
    margin-left: 1em;
  }
`;

export const PrimaryImage1 = styled.img`
  height: 50vh;
  width: auto;
  overflow: hidden;
  object-fit: cover;

  @media ${max.tabletLg} {
    width: 28vw;
    height: max(35vh, 22em);
  }
`;

export const SignatureImage = styled.img`
  width: 40%;
  height: auto;
  object-fit: cover;
  margin-top: 1em;
  margin-bottom: 1em;

  @media ${max.tabletLg} {
    width: 20vw;
  }

  @media ${max.tabletSm} {
    padding-top: 4em;
    width: auto;
    height: 15vh;
  }
`;

// Hero Right Section

export const HeroRightWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${max.tabletLg} {
    width: 70%;
  }
`;

export const RightImagesWrapper = styled.div`
  display: flex;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em;
  width: max(50%, 35em);

  @media ${max.tabletLg} {
    flex-direction: column-reverse;
    padding: 1em;
    width: 45vw;
  }
`;

export const StoryTitle = styled(H1)`
  color: ${colors.BROWN};
  margin: 0;
  font-size: clamp(2em, 2vw, 3em);
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;

  @media ${max.tabletSm} {
    font-size: 1.8em;
  }
`;

export const StoryDate = styled(P)`
  color: ${colors.BROWN};
`;

export const PrimaryImage2 = styled.img`
  height: 40vh;
  width: auto;
  overflow: hidden;
  object-fit: cover;
  margin-right: 2em;

  @media ${max.tabletLg} {
    margin-right: 0em;
    width: 100%;
    height: 25vh;
  }
`;

export const PrimaryImage3 = styled.img`
  height: 40vh;
  width: auto;
  overflow: hidden;
  object-fit: cover;

  @media ${max.tabletLg} {
    display: none;
  }
`;

// Mobile hero

export const MobileHeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4em;
  padding-bottom: 4em;
`;

export const MobileTextWrapper = styled.div`
  padding-left: 10%;
  align-self: flex-start;
  width: 70%;
  position: relative;
`;

export const MobileHeroImage = styled.img`
  opacity: 0.1;
  position: absolute;
  top: 0;
  left: 25%;
  width: 100%;
  max-height: calc(100% + 4em);
  overflow: hidden;
  object-fit: cover;
`;
