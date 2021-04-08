import styled from 'styled-components';
import { min } from '../../lib/responsive';

const SquiggleUnderline = styled.img`
  @media ${min.mobile} {
    width: 45em;
    margin: 0 0 0 8em;
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

const BottomImageContainer = styled.div` 
  position: absolute;
`;

const ImageBoxLinkContainer = styled.div` 
  position: relative;
`;

const BoxLinkContainer = styled.div` 
  position: absolute;
  margin: 1em 0 0 0;
`;

const BottomImage = styled.img` 
width: 100%; 
opacity: 10%;
object-fit: cover;
@media ${min.mobile} {
  height: 100em;
}
@media ${min.tablet} {
  height: 32em;
}
@media ${min.desktop} {
  height: 28em;
}
`;

export { SquiggleUnderline, BottomImageContainer, BottomImage, ImageBoxLinkContainer, BoxLinkContainer };
