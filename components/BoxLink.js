import { getString } from "../lib/richText";

export default function BoxLink({ boxLinkData }) {
    const {
        box_link_title: boxLinkTitle,
        box_link_description: boxLinkDescription,
        box_link_link: {uid: boxLinkLink},
    } = boxLinkData;
  return (
    <>
        {getString(boxLinkTitle)}
        {getString(boxLinkDescription)}
        {boxLinkLink}
    </>
  );
}
