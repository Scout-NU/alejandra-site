import { P } from '../../style/typography';
import styled from 'styled-components';
import { colors } from '../../style/colors';
import { min } from '../../lib/responsive';
const PageDescriptionContainer = styled.div`
  display: flex;
  position: relative;
  @media ${min.mobile} {
    margin: 0 0 0 17em;
  }
  @media ${min.tablet} {
    margin: 0 0 0 15em;
  }
  @media ${min.desktop} {
    padding: 3em 0 0 0;
    margin: 0 0 0 13em;
  }
`;

const Description = styled(P)`
  @media ${min.mobile} {
    margin: 0 0 0 2em;
    width: 19em;
    line-height: 1.8em;
  }
  @media ${min.tablet} {
    margin: 0 0 0 4em;
    width: 19em;
    line-height: 1.8em;
  }
  @media ${min.desktop} {
    margin: 0 0 0 4em;
    width: 19em;
    line-height: 1.8em;
  }
`;

const UnfilledSparkArrow = styled.img`
  height: 12.5em;
`;

const ArrowText = styled(P)`
  color: ${colors.BROWN};
  transform: rotate(270deg);
  transform-origin: top left;
  @media ${min.mobile} {
    padding: 0.3em 0 0 6.3em;
  }
  @media ${min.desktop} {
    padding: 0.3em 0 0 6.3em;
  }
`;

const ArrowContainer = styled.div`
  position: absolute; ;
`;

export {
  PageDescriptionContainer,
  Description,
  UnfilledSparkArrow,
  ArrowText,
  ArrowContainer,
};
