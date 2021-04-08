import { P } from '../../style/typography';
import styled from 'styled-components';
import { colors } from '../../style/colors';
import { min } from '../../lib/responsive';

const UnfilledSparkArrow = styled.img` 
position: absolute;
top: 2em;
right: 6em;
height: 15em;
transform: rotate(90deg);
z-index: 1;
`;

const ArrowText = styled(P)` 
position: absolute;
z-index: 2;
right: 0;
padding-top: 7.8em;
width: 20em;
text-align: right;
color: ${colors.BROWN};
`;

const ArrowContainer = styled.div`
  position: absolute;
  transform: rotate(270deg);
  left: -7.5em;
`;

export {
  UnfilledSparkArrow,
  ArrowText,
  ArrowContainer,
};
