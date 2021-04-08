import { P } from '../../style/typography';
import styled from 'styled-components';
import { colors } from '../../style/colors';
import { min } from '../../lib/responsive';

const UnfilledSparkArrow = styled.img` 
  position: absolute;
  transform: rotate(90deg);
  z-index: 1;
  @media ${min.mobile} {
    top: -.2em;
    right: 11em;
    height: 28em;
  }
  @media ${min.tablet} {
    top: -.2em;
    right: 8em;
    height: 20em;
  }
@media ${min.desktop} {
  top: 2em;
  right: 6em;
  height: 15em;
}
`;

const ArrowText = styled(P)` 
  position: absolute;
  z-index: 2;
  right: 0;
  text-align: right;
  color: ${colors.BROWN};
  @media ${min.mobile} {
    padding-top: 4.5em;
    width: 20em;
  }
  @media ${min.tablet} {
    padding-top: 4.2em;
    width: 20em;
  }
@media ${min.desktop} {
  padding-top: 7.8em;
  width: 20em;
}


`;

const ArrowContainer = styled.div`
  position: absolute;
  transform: rotate(270deg);
  @media ${min.mobile} {
    left: -15em;
    }
  @media ${min.tablet} {
    left: -10em;
    }
  @media ${min.desktop} {
  left: -7.5em;
  }
`;

export {
    UnfilledSparkArrow,
    ArrowText,
    ArrowContainer,
};
