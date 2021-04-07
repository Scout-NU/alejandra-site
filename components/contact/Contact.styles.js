import styled from 'styled-components';
import { min } from '../../lib/responsive';

const SquiggleUnderline = styled.img`
  @media ${min.mobile} {
    width: 42em;
    margin: 0 0 0 5.6em;
  }
  @media ${min.tablet} {
    width: 26em;
    margin: 0 0 0 10em;
  }
  @media ${min.desktop} {
    width: 25em;
    margin: 0.6em 0 0 12.6em;
  }
`;

export { SquiggleUnderline };
