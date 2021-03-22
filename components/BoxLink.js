import { getString } from "../lib/richText";
import styled from 'styled-components';

const BoxLinkTitle = styled.h2`
    font-size: 24px;
`;

const BoxLinkDescription = styled.p`
    font-size: 16px;
`;

const Box = styled.div`
    margin: auto;
    overflow: hidden;
    width: 80%;
    background-color: #DEB887;
    border-radius: 19px;
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
            <BoxLinkDescription>{getString(boxLinkDescription)}</BoxLinkDescription>
            {boxLinkLink}
        </Box>
    </>
  );
}
