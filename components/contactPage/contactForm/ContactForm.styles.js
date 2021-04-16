import styled from 'styled-components';
import { min } from '../../../lib/responsive';

const ContactFormContainer = styled.div`
  @media ${min.mobile} {
    padding-top: 6em;
    width: 70%;
  }
  @media ${min.tablet} {
    width: 55%;
  }
  @media ${min.desktop} {
    padding-top: 3em;
    padding-left: 8em;
    width: 47%;
  }
`;

const InputFieldWrapper = styled.div`
  padding-bottom: 1.5em;
`;

const InputBoxWrapper = styled.div`
  @media ${min.mobile} {
    padding-top: 0.5em;
  }
  @media ${min.desktop} {
    padding-top: 1em;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media ${min.mobile} {
    padding-top: 1.5em;
  }
  @media ${min.tablet} {
    padding-top: 1.8em;
    float: right;
  }
`;

export {
  ContactFormContainer,
  InputFieldWrapper,
  InputBoxWrapper,
  ButtonWrapper,
};
