import { getString } from '../../lib/richText';
import { FooterContainer, EmailWrapper, SocialsWrapper } from './Footer.style';
import FooterLink from './footerLink/FooterLink';

export default function Footer({ footerData }) {
  const {
    contact_email: contactEmail,
    // contact_information_description: contactInformationDescription,
    // contact_title: contactTitle,
    instagram_link: { url: instagramLink },
    tiktok_link: { url: tiktokLink },
  } = footerData;

  const mailToLink = 'mailto:' + getString(contactEmail);

  return (
    <FooterContainer>
      <EmailWrapper>
        <FooterLink label={getString(contactEmail)} link={mailToLink} />
      </EmailWrapper>
      <SocialsWrapper>
        <FooterLink label="Instagram" link={instagramLink} />
        <FooterLink label="Tiktok" link={tiktokLink} />
        <FooterLink label="Facebook" link="#" />
        <FooterLink label="Twitter" link="#" />
      </SocialsWrapper>
    </FooterContainer>
  );
}
