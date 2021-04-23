import { getString } from '../../../../lib/richText';
import { P } from '../../../../style/typography';

export default function NewsletterConfirmationModal({
  newsletterConfirmationData,
}) {
  const {
    confirmationTitleRegular: title1,
    confirmationTitleItalic: title2,
    confirmationDescription: description,
    confirmationImage: image,
  } = newsletterConfirmationData;

  console.log('In conf');
  console.log(newsletterConfirmationData);
  return (
    <>
      <P>{getString(title1)}</P>
      <P>
        <i>{getString(title2)}</i>
      </P>
      <P>{getString(description)}</P>
      <img src={image.url} alt={image.alt} />
    </>
  );
}
