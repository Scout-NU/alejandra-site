import { getString } from '../../lib/richText';
import { H3, P } from '../../style/typography';
import { BoxLinkContainer, EllipseContainer, Ellipse, Title, Description, Arrow, InnerContentContainer } from './BoxLink.styles';
import { icons } from '../../style/icons';
export default function BoxLink({ boxLinkData }) {
  const {
    box_link_title: boxLinkTitle,
    box_link_description: boxLinkDescription,
  } = boxLinkData;

  return (
    <>
      <BoxLinkContainer>
        <EllipseContainer>
          <Ellipse src={icons.DOUBBLE_ELLIPSES} />
        </EllipseContainer>
        <InnerContentContainer>
          <Title>{getString(boxLinkTitle)}</Title>
          <Description>{getString(boxLinkDescription)}</Description>
          <Arrow src={icons.UNFILLED_LONG_ARROW} />
        </InnerContentContainer>
      </BoxLinkContainer>
    </>
  );
}
