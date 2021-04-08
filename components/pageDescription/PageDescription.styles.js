import { P } from '../../style/typography';
import styled from 'styled-components';
import { colors } from '../../style/colors';
import { min } from '../../lib/responsive';

const PageDescriptionContainer = styled.div`
  display: flex;
  position: relative;
  @media ${min.mobile} {
    padding: 4em 0 0 0;
    margin: 0 0 0 10em;
  }
  @media ${min.tablet} {
    padding: 2em 0 0 0;
    margin: 0 0 0 8em;
  }
  @media ${min.desktop} {
    padding: 3em 0 0 0;
    margin: 0 0 0 11em;
  }
`;

const DescriptionContainer = styled.div`
  margin: 0 0 0 2em;

`;

const Description = styled(P)`
  @media ${min.mobile} {
    margin: 0 2em 0 2em;
    width: 18em;
    line-height: 1.8em;
  }
  @media ${min.tablet} {
    margin: 0 0 0 4em;
    width: 15em;
    line-height: 1.8em;
  }
  @media ${min.desktop} {
    margin: 0 0 0 4em;
    width: 19em;
    line-height: 1.8em;
  }
`;

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
  left: -8em;
`;
// const UnfilledSparkArrow = styled.img`
//   @media ${min.mobile} {
//     height: 12.5em;
//   }
//   @media ${min.tablet} {
//     height: 18em;
//   }
//   @media ${min.desktop} {
//     height: 12.5em;
//   }
// `;

// const ArrowText = styled(P)`
//   color: ${colors.BROWN};
//   transform: rotate(270deg);
//   transform-origin: top left;
//   @media ${min.mobile} {
//     padding: 0.3em 0 0 6.3em;
//   }
//   @media ${min.tablet} {
//     padding: 0.3em 0 0 1em;
//   }
//   @media ${min.desktop} {
//     padding: 0.3em 0 0 6.3em;
//   }
// `;



const Img = styled.img`
  opacity: 10%;
  object-fit: cover;
  position: absolute;
  @media ${min.mobile} {
    top: 7em;
    right: 0;
    width: 29em;
    height: 24em;
}
  @media ${min.tablet} {
    top: 7em;
    right: 0;
    width: 29em;
    height: 24em;
}
  @media ${min.desktop} {
    top: 5em;
    right: 0;
    width: 38.5em;
    height: 38em;
}
`;

export {
  PageDescriptionContainer,
  DescriptionContainer,
  Description,
  UnfilledSparkArrow,
  ArrowText,
  ArrowContainer,
  Img,
};
