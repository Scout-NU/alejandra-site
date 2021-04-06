import { getString } from '../../lib/richText';
import React from 'react';
import { P } from '../../style/typography';
import H1Styled from '../H1Styled/H1Styled';
import ContactConfirmation from '../contactConfirmation/ContactConfirmation';

export default function ContactPage({ contactPageData }) {
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
      <P>{getString(contactPageDescription)}</P>
      <img src={contactImageTop.url} alt={contactImageTop.alt} />
      <img src={contactImageBottom.url} alt={contactImageBottom.alt} />
      <ContactConfirmation contactConfirmationData={contactConfirmationData} />
    </>
  );
}
