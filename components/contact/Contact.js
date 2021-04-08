import React from 'react';
import H1Styled from '../H1Styled/H1Styled';
import ContactConfirmation from '../contactConfirmation/ContactConfirmation';
import PageDescription from '../pageDescription/PageDescription';
import BoxLink from '../boxLink/BoxLink';
import { icons } from '../../style/icons';
import { SquiggleUnderline, BottomImageContainer, BottomImage, ImageBoxLinkContainer, BoxLinkContainer } from './Contact.styles';
export default function ContactPage({ contactPageData, boxLinkData }) {
  const {
    contact_page_title_regular: contactPageTitleRegular,
    contact_page_title_italic: contactPageTitleItalic,
    contact_page_description: contactPageDescription,
    contact_image_top: contactImageTop,
    contact_image_bottom: contactImageBottom,
    contact_confirmation_title_regular_1,
    contact_confirmation_title_italic_2,
    contact_confirmation_title_regular_3,
    contact_confirmation_description,
    contact_confirmation_image,
  } = contactPageData;

  const contactConfirmationData = {
    contact_confirmation_title_regular_1,
    contact_confirmation_title_italic_2,
    contact_confirmation_title_regular_3,
    contact_confirmation_description,
    contact_confirmation_image,
  };

  return (
    <>
      <H1Styled
        regular={contactPageTitleRegular}
        italicized={contactPageTitleItalic}
      ></H1Styled>
      <SquiggleUnderline src={icons.SQUIGGLE_UNDERLINE} />
      <PageDescription
        description={contactPageDescription}
        arrowText="LET'S CONNECT"
        img={contactImageTop.url}
      />
      <ImageBoxLinkContainer>
        <BottomImageContainer>
          <BottomImage src={contactImageBottom.url} />
        </BottomImageContainer>
        <BoxLinkContainer>
          <BoxLink boxLinkData={boxLinkData} />
        </BoxLinkContainer>
      </ImageBoxLinkContainer>
      {/* <ContactConfirmation contactConfirmationData={contactConfirmationData} /> */}
    </>
  );
}
