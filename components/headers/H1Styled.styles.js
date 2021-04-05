import { H1 } from '../../style/typography';
import styled from 'styled-components';
import { min } from '../../lib/responsive';

const H1Container = styled.div`
  @media ${min.desktop} {
    padding: 0;
    margin: 4em 0 2em 5.9em;
  }
`;

const H1Regular = styled(H1)`
  @media ${min.desktop} {
    padding: 0;
    margin: 0 auto;
  }
`;

const H1Italicized = styled(H1)`
  @media ${min.desktop} {
    padding: 0;
    margin: 0 0 0 0.76em;
    line-height: 70px;
  }
`;

export { H1Container, H1Regular, H1Italicized };
