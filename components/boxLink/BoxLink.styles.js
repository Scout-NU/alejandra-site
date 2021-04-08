import styled from 'styled-components';
import { P } from '../../style/typography';
import { colors } from '../../style/colors';
import { fontWeights } from '../../style/typography';
import { min } from '../../lib/responsive';

const BoxLinkContainer = styled.div`
position: relative;
@media ${min.tablet} {
  padding: 0 0 0 15em;
}
@media ${min.desktop} {
  padding: 0 0 0 48em;
}
`;

const InnerContentContainer = styled.div`
position: absolute;
z-index: 2;
@media ${min.tablet} {
  padding-left: 1em;
  top: 9em;
}
@media ${min.desktop} {
  padding-left: 1em;
  top: 8em;
}
`;

const EllipseContainer = styled.div` 
  position: absolute
  z-index: 1;
  @media ${min.tablet} {
    top: 0;
  }
  @media ${min.desktop} {
    top: 0;
  }
`;

const Ellipse = styled.img`
@media ${min.tablet} {
  height: 30em;
  width: 30em;
}
@media ${min.desktop} {
  height: 25em;
  width: 25em;
}

`;

const Arrow = styled.img`
@media ${min.tablet} {
  height: 5em;
  width: 10em;
  margin: 0 0 0 5em;
}
@media ${min.desktop} {
  height: 5em;
  width: 10em;
  margin: 0 0 0 5em;
}

`;

const Title = styled(P)`
  color: ${colors.BROWN};
  font-weight: ${fontWeights.medium};
  letter-spacing: .1em;
  margin: 0;
  @media ${min.desktop} {
    padding-bottom: 1em;
  }
`;


const Description = styled(P)`
@media ${min.tablet} {
  width: 13em;
  margin: 0 0 0 2em;
  line-height: 1.7em;
}
@media ${min.desktop} {
  width: 13em;
  margin: 0 0 0 5em;
  line-height: 1.7em;
}
`;

export { BoxLinkContainer, InnerContentContainer, EllipseContainer, Ellipse, Title, Description, Arrow };
