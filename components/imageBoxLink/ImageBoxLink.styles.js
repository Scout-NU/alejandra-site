import styled from 'styled-components';
import { max } from '../../lib/responsive';

const BottomImageContainer = styled.div`
  position: absolute;
`;

const ImageBoxLinkContainer = styled.div`
  position: relative;
  padding-top: 10em;
  display: flex;
  justify-content: flex-end;
  flex: 100%;
  flex-direction: row;
`;

const BoxLinkContainer = styled.div`
  margin: 2em 13em auto 0;
  // @media ${max.tabletSm} {
  //   margin: 3.8em 0 0 0;
  // }
  // @media ${max.tabletLg} {
  //   margin: 3em 0 0 15em;
  // }
  // margin: 1em 0 0 40em;
`;

const BottomImage = styled.img`
  opacity: 10%;
  object-fit: cover;
  @media ${max.tablet} {
    height: 30em;
    width: 100%;
  }

  @media ${max.tabletLg} {
    height: 32em;
    width: 100vw;
  }
  height: 27.25em;
  width: 200vw;
`;

export {
  BottomImageContainer,
  BottomImage,
  ImageBoxLinkContainer,
  BoxLinkContainer,
};
