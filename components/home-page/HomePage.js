import React, { useEffect, useState } from 'react';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';
import {
  HomePageContentWrapper,
  FeaturedStoryPreviews,
  AlleywayLogo,
  HomePageIntroContainer,
} from './HomePage.styles';
import CurrentFeaturedStory from './current-featured-story/CurrentFeaturedStory';
import FeaturedStoryPreview from './featured-story-preview/FeaturedStoryPreview';
import NewsletterSignUp from './newsletter-sign-up/NewsletterSignUp';
import { icons } from '../../style/icons';

const PREVIEW_CHANGE_IN_MILLISECONDS = 3000;

export default function HomePage({
  authorSignatures,
  homePageData,
  navigationData,
  footerData,
}) {
  const {
    featured_stories: featuredStories,
    newsletter_signup: newsletterSignup,
    newsletter_description: newsletterDescription,
    privacy_policy_link_title: privacyPolicyLinkTitle,
    privacy_policy_text: privacyPolicyText,
    newsletter_confirmation_title_regular: confirmationTitleRegular,
    newsletter_confirmation_title_italic: confirmationTitleItalic,
    newsletter_confirmation_description: confirmationDescription,
    newsletter_confirmation_image: confirmationImage,
  } = homePageData;

  const newsletterConfirmationData = {
    confirmationTitleRegular,
    confirmationTitleItalic,
    confirmationDescription,
    confirmationImage,
  };

  const getSignature = (authorInfoID) => authorSignatures[String(authorInfoID)];

  const [activeIndex, setActiveIndex] = useState(0);
  const [alreadyHovered, setAlreadyHovered] = useState(false);

  const mapFeaturedStories = (featuredStory, index) => {
    return (
      <FeaturedStoryPreview
        active={index === activeIndex}
        featuredStory={featuredStory.story}
        key={featuredStory.story.id}
        onHover={() => {
          setAlreadyHovered(true);
          setActiveIndex(index);
        }}
        signature={getSignature(featuredStory.story.data.author_info.id)}
      />
    );
  };

  useEffect(() => {
    const id = setTimeout(
      () => setActiveIndex((activeIndex + 1) % featuredStories.length),
      PREVIEW_CHANGE_IN_MILLISECONDS,
    );
    return () => clearTimeout(id);
  }, [activeIndex]);

  return (
    <>
      {alreadyHovered && <Navigation navigationData={navigationData} />}
      <HomePageContentWrapper>
        {alreadyHovered && (
          <CurrentFeaturedStory
            featuredStory={
              featuredStories[Number.parseInt(activeIndex)].story.data
            }
            signature={getSignature(
              featuredStories[Number.parseInt(activeIndex)].story.data
                .author_info.id,
            )}
            url={`/story/${
              featuredStories[Number.parseInt(activeIndex)].story.uid
            }`}
          />
        )}
        {!alreadyHovered && (
          <HomePageIntroContainer>
            <AlleywayLogo src={icons.FULL_ALLEYWAY_LOGO} />
            <FeaturedStoryPreviews>
              {featuredStories.map(mapFeaturedStories)}
            </FeaturedStoryPreviews>
          </HomePageIntroContainer>
        )}
        {alreadyHovered && (
          <FeaturedStoryPreviews>
            {featuredStories.map(mapFeaturedStories)}
          </FeaturedStoryPreviews>
        )}
        {alreadyHovered && (
          <NewsletterSignUp
            description={newsletterDescription}
            newsletterConfirmationData={newsletterConfirmationData}
            privacyPolicyLinkTitle={privacyPolicyLinkTitle}
            privacyPolicyText={privacyPolicyText}
            title={newsletterSignup}
          />
        )}
      </HomePageContentWrapper>
      {alreadyHovered && <Footer footerData={footerData} />}
    </>
  );
}
