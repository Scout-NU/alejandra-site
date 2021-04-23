import { getString } from '../../../../lib/richText';
import { P } from '../../../../style/typography';

export default function NewsletterConfirmationModal({
  newsletterConfirmationData,
}) {
  const {
    newsletter_confirmation_title_1: title1,
    newsletter_confirmation_title_2: title2,
    newsletter_confirmation_description: description,
    newsletter_confirmation_image: image,
  } = newsletterConfirmationData;

  console.log('In conf');
  console.log(image);
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
