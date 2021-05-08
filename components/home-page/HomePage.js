import React, { useEffect, useState } from 'react';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';
import {
  HomePageContentWrapper,
  FeaturedStoryPreviews,
  AlleywayLogo,
  AlleywayEmblem,
  HomePageIntroContainerLarge,
  HomePageIntroContainerSmall,
} from './HomePage.styles';
import CurrentFeaturedStory from './current-featured-story/CurrentFeaturedStory';
import FeaturedStoryPreview from './featured-story-preview/FeaturedStoryPreview';
import NewsletterSignUp from './newsletter-sign-up/NewsletterSignUp';
import { icons } from '../../style/icons';
import { useSpring } from 'react-spring';
import { fadeIn } from '../../style/animations';
import { breakpointsObj } from '../../lib/responsive';
import { useMatchMedia } from '../../lib/hooks';

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

  const isMobile = useMatchMedia(`(max-width: ${breakpointsObj.tabletSm}px)`);

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
          set({ opacity: 0 });
        }}
        alreadyHovered={alreadyHovered}
        signature={getSignature(featuredStory.story.data.author_info.id)}
      />
    );
  };

  const fadeInAnimation = useSpring(fadeIn);
  const [{ opacity }, set] = useSpring(() => ({ opacity: 1 }));
  const [faded, setFade] = useState(false);
  setTimeout(() => setFade(true), 3000);

  useEffect(() => {
    const id = setTimeout(
      () => setActiveIndex((activeIndex + 1) % featuredStories.length),
      PREVIEW_CHANGE_IN_MILLISECONDS,
    );
    return () => clearTimeout(id);
  }, [activeIndex]);

  return (
    <>
      {alreadyHovered ||
        (faded && isMobile && <Navigation navigationData={navigationData} />)}
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
          <HomePageIntroContainerLarge style={fadeInAnimation}>
            <AlleywayLogo src={icons.LARGE_ALLEYWAY_LOGO} />
            <FeaturedStoryPreviews>
              {featuredStories.map(mapFeaturedStories)}
            </FeaturedStoryPreviews>
          </HomePageIntroContainerLarge>
        )}
        {!alreadyHovered && !faded && (
          <HomePageIntroContainerSmall>
            <AlleywayEmblem
              src={icons.LARGE_ALLEYWAY_EMBLEM}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ type: 'spring', duration: 4, delay: 1 }}
            />
            <FeaturedStoryPreviews>
              {featuredStories.map(mapFeaturedStories)}
            </FeaturedStoryPreviews>
          </HomePageIntroContainerSmall>
        )}
        {alreadyHovered ||
          (faded && isMobile && (
            <FeaturedStoryPreviews alreadyHovered>
              {featuredStories.map(mapFeaturedStories)}
            </FeaturedStoryPreviews>
          ))}
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
