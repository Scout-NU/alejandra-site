import styled from 'styled-components';
import { min } from '../../lib/responsive';

const SquiggleUnderline = styled.img`
  @media ${min.mobile} {
    width: 50em;
    margin: 0.6em 0 0 6.6em;
  }
  @media ${min.tablet} {
    width: 35em;
    margin: 0.6em 0 0 14em;
  }
  @media ${min.desktop} {
    width: 25em;
    margin: 0.6em 0 0 12.6em;
  }
`;

export { SquiggleUnderline };
