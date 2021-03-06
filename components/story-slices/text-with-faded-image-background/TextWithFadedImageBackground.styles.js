import styled from 'styled-components';
import { min, max } from '../../../lib/responsive';
import { P } from '../../../style/typography';
import { motion } from 'framer-motion';

export const TextWithFadedImageBackgroundWrapper = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  position: relative;
  padding: 4em;
  height: 100%;

  @media ${max.tabletLg} {
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  @media ${max.tabletSm} {
    padding: 2em;
  }
`;

export const Text = styled(P)`
  padding-top: ${(props) => (props.imageRight ? '5vh' : '30vh')};
  padding-left: ${(props) => (props.imageRight ? '0vh' : '30vh')};
  padding-right: ${(props) => (props.imageRight ? '30vh' : '0vh')};
  width: 40em;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${max.tabletLg} {
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
    width: 40%;
  }

  @media ${max.tablet} {
    width: 75%;
  }
`;

export const Image = styled(motion.img)`
  position: absolute;
  height: 70%;
  width: 50%;
  object-fit: cover;
  opacity: 0.15;
  padding-top: 4em;

  @media ${min.tabletLg} {
    left: ${(props) => (props.imageRight ? 'auto' : 0)};
    top: ${(props) => (props.imageRight ? 'auto' : 0)};
    right: ${(props) => (props.imageRight ? '4em' : 'auto')};
    bottom: ${(props) => (props.imageRight ? '4em' : 'auto')};
    padding-left: 2em;
  }

  @media ${max.tabletLg} {
    padding-top: 0em;
    width: 50%;
    height: calc(100% - 8em);
    max-height: 30em;
    right: ${(props) => (props.imageRight ? '0' : 'auto')};
    left: ${(props) => (props.imageRight ? 'auto' : '0')};
  }

  @media ${max.mobile} {
    max-height: 18em;
    width: 100%;
  }
`;
