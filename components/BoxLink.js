import { getString } from "../lib/richText";
import styled from 'styled-components';
import BoxLinkArrow from "../icons";
import { min, max } from "../lib/responsive";

const BoxLinkTitle = styled.h2`
    font-size: 24px;
    padding: 1em 2em 0 2em;
    @media ${max.tabletLg} {
        padding: 0 1em 0 1em;
      }

`;

const BoxLinkDescription = styled.p`
    font-size: 16px;
    padding: 0 2em 1.5em 3em;
    margin-top: .5em;
    @media ${max.tabletLg} {
        padding: 0 1em 0 1.6em;
        display: flex;
      }
`;

const Box = styled.div`
    margin: auto;
    overflow: hidden;
    max-width: 25em;
    background-color: #C4C4C4;
    border-radius: 19px;
    @media ${max.tabletLg} {
        width: 40%;
      }
`;

const Arrow = styled.div`
    padding: 1.5em 0 0 17em;
    @media ${max.tabletLg} {
        padding: 1em 0 0 0;
      }
`;

export default function BoxLink({ boxLinkData }) {
    const {
        box_link_title: boxLinkTitle,
        box_link_description: boxLinkDescription,
        box_link_link: {uid: boxLinkLink},
    } = boxLinkData;
  return (
    <>
        <Box>
            <BoxLinkTitle>{getString(boxLinkTitle)}</BoxLinkTitle>
                <BoxLinkDescription>
                    {getString(boxLinkDescription)}
                    <Arrow>
                        <BoxLinkArrow />
                    </Arrow>
                </BoxLinkDescription>
        </Box>
    </>
  );
}
