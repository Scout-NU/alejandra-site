import { getString } from '../../lib/richText';
import { H3, P } from '../../style/typography';
import { BoxLinkContainer, Ellipse, Title, Description } from './BoxLink.styles';
import { icons } from '../../style/icons';
export default function BoxLink({ boxLinkData }) {
  const {
    box_link_title: boxLinkTitle,
    box_link_description: boxLinkDescription,
  } = boxLinkData;

  return (
    <>
      <BoxLinkContainer>
        <Ellipse src={icons.DOUBBLE_ELLIPSES} />
        <Title>{getString(boxLinkTitle)}</Title>
        <Description>{getString(boxLinkDescription)}</Description>
      </BoxLinkContainer>
    </>
  );
}
