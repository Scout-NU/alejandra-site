import styled from 'styled-components';
import { P } from '../../style/typography';
import { colors } from '../../style/colors';
import { fontWeights } from '../../style/typography';
import { min } from '../../lib/responsive';

const BoxLinkContainer = styled.div`
position: relative;
@media ${min.desktop} {
  padding: 0 0 0 48em;
}

`;

const InnerContentContainer = styled.div`
position: absolute;
z-index: 2;
@media ${min.desktop} {
  padding-left: 1em;
  top: 6em;
}
`;

const EllipseContainer = styled.div` 
  position: absolute
  z-index: 1;
  @media ${min.desktop} {
    top: 0;
  }
`;

const Ellipse = styled.img`
@media ${min.desktop} {
  height: 25em;
  width: 25em;
}

`;

const Arrow = styled.img`
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
`;


const Description = styled(P)`
@media ${min.desktop} {
  width: 13em;
  margin: 0 0 0 5em;
  line-height: 1.7em;
}
`;

export { BoxLinkContainer, InnerContentContainer, EllipseContainer, Ellipse, Title, Description, Arrow };
