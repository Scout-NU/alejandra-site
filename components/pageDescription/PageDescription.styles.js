import { P } from '../../style/typography';
import styled from 'styled-components';
import { colors } from '../../style/colors';
import { min } from '../../lib/responsive';
const PageDescriptionContainer = styled.div`
  @media ${min.mobile} {
    margin: 0 0 0 17em;
  }
  @media ${min.tablet} {
    margin: 0 0 0 15em;
  }
  @media ${min.desktop} {
    margin: 0 0 0 17em;
  }
`;

const Description = styled(P)`
  @media ${min.mobile} {
    margin: 2em 0 0 0;
    width: 19em;
    line-height: 1.8em;
  }
  @media ${min.tablet} {
    margin: 2em 0 0 0;
    width: 19em;
    line-height: 1.8em;
  }
  @media ${min.desktop} {
    margin: 2em 0 0 0;
    width: 19em;
    line-height: 1.8em;
  }
`;

const UnfilledSparkArrow = styled.img`
  width: 4%;
  height: 4%;
`;

const ArrowText = styled(P)`
  color: ${colors.BROWN};
  transform: rotate(270deg);
  transform-origin: top left;
  padding-left: 4em;
`;

const ArrowContainer = styled.div``;

export {
  PageDescriptionContainer,
  Description,
  UnfilledSparkArrow,
  ArrowText,
  ArrowContainer,
};
