import styled from 'styled-components';
import { P, fonts, fontWeights } from '../../../style/typography';
import { colors } from '../../../style/colors';
import { max } from '../../../lib/responsive';

export const TakeActionWrapper = styled.div`
  margin: 4em;
`;

const TakeActionHeading = styled.h1`
  font-family: ${fonts.swearDisplay};
  font-weight: ${fontWeights.medium};
  color: ${colors.BURNTORANGE};
  text-transform: lowercase;
  margin: 0;
`;

export const TakeActionHeadingDesktop = styled(TakeActionHeading)`
  font-size: 12em;
  width: 5em;
  position: relative;
`;

export const ActionButtonsWrapper = styled.div`
  width: 25vw;
  max-width: 25em;
  display: flex;
  justify-content: space-between;

  @media ${max.tabletLg} {
    width: 50%;
  }

  @media ${max.tabletSm} {
    width: 85%;
  }
`;

export const UnderlineImage = styled.img`
  width: 2.5em;
  position: absolute;
  bottom: 0;
  left: 2em;
`;

export const DescriptionText = styled(P)`
  margin-top: min(4vh, 3em);
  margin-bottom: min(6vh, 4em);
  width: min(25vw, 25em);

  @media ${max.tabletLg} {
    margin-bottom: em;
    width: 50%;
  }

  @media ${max.tabletSm} {
    width: 60%;
  }
`;

export const TitleAndButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BackToStartButtonContainer = styled.div`
  height: 1em;
`;

// Tablet and Mobile

export const TabletMobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const TabletMobileTake = styled(TakeActionHeading)`
  font-size: max(6em, 20vw);
  align-self: flex-start;
  padding-left: 15%;
`;

export const TabletMobileAction = styled(TakeActionHeading)`
  font-size: max(6em, 20vw);
  line-height: 0.3em;
`;

export const ResourceWrapper = styled.div`
  width: 25vw;
  max-width: 25em;
  padding-bottom: 5em;

  @media ${max.tabletLg} {
    width: 50%;
  }

  @media ${max.tabletSm} {
    width: 85%;
  }
`;
