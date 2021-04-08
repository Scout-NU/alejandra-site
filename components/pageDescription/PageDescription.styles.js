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
    margin: 0 0 0 13em;
  }
`;

const DescriptionContainer = styled.div`

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
height: 12.5em;
transform: rotate(90deg);
z-index: 1;
margin: 0 0 0 13em;

`;

const ArrowText = styled(P)` 
position: absolute;
z-index: 2;
padding-top: 6.5em;
width: 20em;
text-align: right;

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

const ArrowContainer = styled.div`
  position: relative;
  

`;

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
