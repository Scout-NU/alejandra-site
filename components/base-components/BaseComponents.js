import styled from 'styled-components';
import { colors } from '../../style/colors';
import { min, max } from '../../lib/responsive';
import { P } from '../../style/typography';
import { HoverAnimationButton } from '../animation-base-components/AnimationBaseComponents';

export const Overlay = styled.div`
  display: ${(props) => (props.showOverlay ? 'block' : 'none')};
  position: fixed;
  background-color: ${colors.CREME};
  opacity: 0.7;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
`;

export const RedStar = styled.img`
  width: 2%;
  margin-left: 0.5em;
  @media ${min.desktopLg} {
    width: 0.7em;
  }
`;


export const SubmitButton = styled(P).attrs({
  as: HoverAnimationButton,
})`
  color: ${colors.WHITE};
  background-color: ${colors.OLIVE};
  border: none;
  width: 150px;
  height: 48px;
  margin-top: 10px;
  align-self: flex-end;
  font-weight: normal;
  letter-spacing: 4px;
  cursor: pointer;

  @media ${max.tabletSm} {
    align-self: center;
    width: 50%;
    letter-spacing: 2px;
  }
`;
