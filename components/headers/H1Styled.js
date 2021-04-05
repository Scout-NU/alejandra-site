import { getString } from '../../lib/richText';
import { H1 } from '../../style/typography';
import styled from 'styled-components';

const H1Container = styled.div`
  padding: 0;
  margin: 0 0 0 5em;
`;

const H1Regular = styled(H1)`
  padding: 0;
  margin: 0 auto;
  line-height: 210px;
`;

const H1Italicized = styled(H1)`
  padding: 0;
  margin: 0 0 0 0.8em;
  line-height: 210px;
`;

export default function H1Styled({ regular, italicized }) {
  return (
    <H1Container>
      <H1Regular>{getString(regular)}</H1Regular>
      <H1Italicized>
        <i>{getString(italicized)}</i>
      </H1Italicized>
    </H1Container>
  );
}
