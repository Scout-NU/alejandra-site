import styled from 'styled-components';
import { P } from '../../style/typography';
import { colors } from '../../style/colors';
import { fontWeights } from '../../style/typography';

const BoxLinkContainer = styled.div`
  padding: 0 0 0 48em;
`;

const Ellipse = styled.img`
  height: 78%;
  width: 78%;
`;

const Title = styled(P)`
  color: ${colors.BROWN};
  font-weight: ${fontWeights.medium};
  letter-spacing: .1em;
`; 


const Description = styled(P)`
  width: 14em;
`; 

export { BoxLinkContainer, Ellipse, Title, Description };
