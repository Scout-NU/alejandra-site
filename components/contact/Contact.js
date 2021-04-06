import { getString } from '../../lib/richText';
import React from 'react';
import { P } from '../../style/typography';
import H1Styled from '../H1Styled/H1Styled';
import ContactConfirmation from '../contactConfirmation/ContactConfirmation';
import BoxLink from '../boxLink/BoxLink';
import { SvgStyled } from './Contact.styles';

export default function ContactPage({ contactPageData, boxLinkData }) {
  const {
    contact_page_title_regular: contactPageTitleRegular,
    contact_page_title_italic: contactPageTitleItalic,
    contact_page_description: contactPageDescription,
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
      <SvgStyled />
      <P>{getString(contactPageDescription)}</P>
      <BoxLink boxLinkData={boxLinkData} />
      <ContactConfirmation contactConfirmationData={contactConfirmationData} />
    </>
  );
}
