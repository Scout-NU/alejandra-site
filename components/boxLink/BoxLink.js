import { getString } from '../../lib/richText';
import { H3, P } from '../../style/typography';

export default function BoxLink({ boxLinkData }) {
  const {
    box_link_title: boxLinkTitle,
    box_link_description: boxLinkDescription,
  } = boxLinkData;
  return (
    <>
      <H3>{getString(boxLinkTitle)}</H3>
      <P>{getString(boxLinkDescription)}</P>
    </>
  );
}
