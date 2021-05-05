import styled from 'styled-components';
import { P } from '../../style/typography';
import { min } from '../../lib/responsive';
import { colors } from '../../style/colors';

const TextLabel = styled(P)`
  color: ${colors.BROWN};
  display: block;
  margin: 0;
  font-size: 0.8em;
`;

const ErrorText = styled(P)`
  position: absolute;
  color: ${colors.RED};
  font-size: 0.7em;
  margin: 0.5em 0 0 0;
  text-shadow: 0.5px 0 #ff0000;
  letter-spacing: 0.05em;
`;

const RedStar = styled.img`
  width: 2%;
  margin-left: 0.5em;
  @media ${min.desktopLg} {
    width: 0.7em;
  }
`;

const StarLabelContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const TextInput = styled(P).attrs({
  as: 'input',
})`
  display: block;
  border: none;
  background-color: ${colors.CREME};
  border-bottom: ${(props) =>
    props.showError ? `1px solid ${colors.RED}` : `1px solid ${colors.BROWN}`};
  width: 100%;
  border-radius: 0%;
  &:focus {
    outline: none;
  }
`;

const InputFieldWrapper = styled.div`
  padding-bottom: 2em;
`;

const Icon = styled.img`
  margin: -2em 0 0 25.8em;
  width: 1.8em;
  float: right;
`;

export {
  TextLabel,
  TextInput,
  RedStar,
  StarLabelContainer,
  ErrorText,
  InputFieldWrapper,
  Icon,
};
