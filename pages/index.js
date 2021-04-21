import {
  getAuthorSignatureFromIDs,
  getHomePage,
  getNavigation,
  getFooter,
} from '../lib/api';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';
import FeaturedStoryPreview from '../components/featuredStoryPreview/FeaturedStoryPreview';
import NewsletterConfirmation from '../components/newsletterConfirmation/NewsletterConfirmation';
import { H2, P } from '../style/typography';
import { getString } from '../lib/richText';
import H1Styled from '../components/H1Styled/H1Styled';

export default function HomePage({
  homePageData,
  featuredStoriesData,
  navigationData,
  footerData,
}) {
  const {
    home_page_title: homePageTitle,
    featured_stories_title: featuredStoriesTitle,
    newsletter_signup: newsletterSignup,
    newsletter_description: newsletterDescription,
    privacy_policy_link_title: privacyPolicyLinkTitle,
    privacy_policy_text: privacyPolicyText,
    newsletter_confirmation_title_1,
    newsletter_confirmation_title_2,
    newsletter_confirmation_description,
    newsletter_confirmation_image,
  } = homePageData;

  const newsletterConfirmationData = {
    newsletter_confirmation_title_1,
    newsletter_confirmation_title_2,
    newsletter_confirmation_description,
    newsletter_confirmation_image,
  };

  return (
    <>
      <Navigation navigationData={navigationData} />
      <H1Styled regular={homePageTitle} italicized={undefined} />
      <H2>{getString(featuredStoriesTitle)}</H2>
      {featuredStoriesData.map((item) => {
        return <FeaturedStoryPreview key={item.uid} featuredStoryData={item} />;
      })}
      <H2>{getString(newsletterSignup)}</H2>
      <P>{getString(newsletterDescription)}</P>
      <H2>{getString(privacyPolicyLinkTitle)}</H2>
      <P>{getString(privacyPolicyText)}</P>
      <NewsletterConfirmation
        newsletterConfirmationData={newsletterConfirmationData}
      />
      <Footer footerData={footerData} />
    </>
  );
}

export async function getStaticProps() {
  const homePageData = await getHomePage();
  const footerData = await getFooter();
  const navigationData = await getNavigation();
  const authorInfoIDs = homePageData.featured_stories.map(
    (story) => story.story.data.author_info.id,
  );
  const authorSignatures = await getAuthorSignatureFromIDs(authorInfoIDs);

  return {
    props: {
      authorSignatures,
      homePageData,
      navigationData,
      footerData,
    },
  };
}
