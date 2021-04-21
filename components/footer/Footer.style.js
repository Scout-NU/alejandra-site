import styled from 'styled-components';
import { colors } from '../../style/colors';
import { max } from '../../lib/responsive';

const FooterContainer = styled.div`
  // position: relative;
  width: 100%;
  // height: 15em;
  margin-top: ${(props) => (props.topMargin ? '10em' : '0')};
  bottom: 0;
  right: 0;

  display: flex;
  flex: 100%;
  flex-direction: column;

  // border: 2px solid red;
`;

const FooterSocialsContainer = styled.div`
  background-color: ${colors.OLIVE};
  width: 100%;
  min-height: 15em;
  // margin-top: 10em;
  // bottom: 0;

  display: flex;
  flex: 100%;

  @media only screen and ${max.tablet} {
    height: clamp(11em, 28vh, 15em);
  }

  @media only screen and ${max.tabletSm} {
    height: 11em;
    // flex-direction: column;
  }
`;

const EmailWrapper = styled.div`
  padding-top: 4em;
  padding-left: 4em;
  width: 35%;

  @media only screen and ${max.tablet} {
    width: 50%;
    padding-top: clamp(1em, 5vw, 3em);
    padding-left: 3em;
  }

  @media only screen and ${max.tabletSm} {
    width: 60%;
    padding-left: clamp(1em, 3vw, 3em);
  }
`;

const SocialsWrapper = styled.div`
  padding-top: 4em;
  padding-left: clamp(3em, 7vw, 4em);
  width: 40%;

  @media only screen and ${max.tablet} {
    padding-top: clamp(1em, 5vw, 3em);
  }
`;

export {
  FooterContainer,
  FooterSocialsContainer,
  EmailWrapper,
  SocialsWrapper,
};
