import { getString } from '../../lib/richText';
import {
  FooterContainer,
  FooterSocialsContainer,
  EmailWrapper,
  SocialsWrapper,
} from './Footer.style';
import FooterLink from './footerLink/FooterLink';
import ImageBoxLink from '../imageBoxLink/ImageBoxLink';
// import { Overlay } from '../contactPage/ContactPage.styles';

export default function Footer({ footerData, boxLinkData }) {
  const {
    contact_email: contactEmail,
    // contact_information_description: contactInformationDescription,
    // contact_title: contactTitle,
    instagram_link: { url: instagramLink },
    tiktok_link: { url: tiktokLink },
  } = footerData;

  const mailToLink = 'mailto:' + getString(contactEmail);

  return (
    // <div style={{ overflow: 'hidden' }}>
    <FooterContainer topMargin={boxLinkData ? false : true}>
      {boxLinkData && (
        <div>
          <ImageBoxLink boxLinkData={boxLinkData} />
        </div>
      )}
      <FooterSocialsContainer>
        <EmailWrapper>
          <FooterLink label={getString(contactEmail)} link={mailToLink} />
        </EmailWrapper>
        <SocialsWrapper>
          <FooterLink label="Instagram" link={instagramLink} />
          <FooterLink label="Tiktok" link={tiktokLink} />
          <FooterLink label="Facebook" link="#" />
          <FooterLink label="Twitter" link="#" />
        </SocialsWrapper>
      </FooterSocialsContainer>
    </FooterContainer>
  );
}
