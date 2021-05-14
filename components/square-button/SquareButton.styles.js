import { P } from '../../style/typography';
import styled from 'styled-components';
import { colors } from '../../style/colors';
import { fontWeights } from '../../style/typography';
import { min } from '../../lib/responsive';

const Button = styled.button`
  cursor: pointer;
  background-color: ${colors.DEWYGRASS};
  color: ${colors.FRESHSNOW};
  border: none;
  width: ${(props) => (props.long ? `17em` : `10em`)};
  height: 4em;

  @media ${min.tablet} {
    width: ${(props) => (props.long ? `16em` : `13em`)};
  }

  @media ${min.desktop} {
    width: ${(props) => (props.long ? `18em` : `9.5em`)};
    height: ${(props) => (props.long ? `3.4em` : `3.8em`)};
  }
`;

const ButtonText = styled(P)`
  margin: 0;
  letter-spacing: 0.13em;
  &:hover {
    font-weight: ${fontWeights.bold};
  }
`;

export { Button, ButtonText };
