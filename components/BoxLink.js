import { getString } from "../lib/richText";
import styled from 'styled-components';

const BoxLinkTitle = styled.h2`
    font-size: 24px;
    padding: 30px 40px 0 40px;
    position: absolute;
`;

// top right bottom left

const BoxLinkDescription = styled.p`
    font-size: 16px;
    padding: 0 40px 40px 30px;
    position: absolute;
`;

const Box = styled.div`
    margin: auto;
    display: flex;
    position: relative;
    overflow: hidden;
    max-width: 500px;
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
        </Box>
    </>
  );
}
