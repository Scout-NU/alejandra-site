import React, { useState } from 'react';
import { useMatchMedia } from '../../../lib/hooks';
import { breakpointsObj } from '../../../lib/responsive';
import { getString } from '../../../lib/richText';
import { icons } from '../../../style/icons';
import { InputInfoText } from '../../../style/typography';
import OvalButton from '../../oval-button/OvalButton';
import BackToStartButton from '../../back-to-start-button/BackToStartButton';
import MoreResourcesModal from './more-resources-modal/MoreResourcesModal';
import {
  ActionButtonsWrapper,
  BackToStartButtonContainer,
  TitleAndButtonWrapper,
  DescriptionText,
  ResourceWrapper,
  ShareLinkWrapper,
  ShareLinkText,
  TakeActionHeadingDesktop,
  TabletMobileWrapper,
  TabletMobileTake,
  TabletMobileAction,
  TakeActionWrapper,
  UnderlineImage,
} from './TakeAction.styles';

const copyToClipboard = () => {
  if (typeof window !== 'undefined') {
    const text = window.location.href;
    const textField = document.createElement('textarea');
    textField.readOnly = true;
    textField.textContent = text;
    document.body.append(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    alert('Copied story link to clipboard');
  }
};

export default function TakeAction({
  takeActionDescription,
  donateLink,
  learnLink,
  signLink,
  moreResources,
  moreResourcesBackground,
}) {
  const [shareHover, setShareHover] = useState(false);

  const isTabletOrMobile = useMatchMedia(
    `(max-width: ${breakpointsObj.tabletLg}px)`,
  );

  const showMoreResources = moreResources.length > 0;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const takeActionContent = (
    <>
      <DescriptionText>{getString(takeActionDescription)}</DescriptionText>
      <ResourceWrapper>
        <ActionButtonsWrapper>
          <OvalButton buttonText="SIGN" href={signLink.url} />
          <OvalButton buttonText="LEARN" href={learnLink.url} />
          <OvalButton buttonText="DONATE" href={donateLink.url} />
        </ActionButtonsWrapper>
        {showMoreResources && (
          <InputInfoText
            onClick={() => {
              document.body.style.overflow = 'hidden';
              setIsModalOpen(true);
            }}
          >
            more resources
          </InputInfoText>
        )}
      </ResourceWrapper>
    </>
  );

  const shareLink = (
    <ShareLinkWrapper
      onMouseEnter={() => setShareHover(true)}
      onMouseLeave={() => setShareHover(false)}
      onClick={copyToClipboard}
      url={icons.SHARE_STORY_LINE}
    >
      <ShareLinkText>SHARE THIS STORY</ShareLinkText>
      <img
        src={shareHover ? icons.SHARE_STORY_HOVER : icons.SHARE_STORY}
        alt="share icon"
      />
    </ShareLinkWrapper>
  );

  return (
    <>
      {isTabletOrMobile ? (
        <TabletMobileWrapper>
          {shareLink}
          <TabletMobileTake>Take</TabletMobileTake>
          <TabletMobileAction>
            <i>Action</i>
            <img src={icons.SQUIGGLE_UNDERLINE} alt="underline squiggle" />
          </TabletMobileAction>
          {takeActionContent}
        </TabletMobileWrapper>
      ) : (
        <TakeActionWrapper>
          <TitleAndButtonWrapper>
            <TakeActionHeadingDesktop>
              Take <i>Action</i>
              <UnderlineImage
                src={icons.SQUIGGLE_UNDERLINE}
                alt="underline squiggle"
              />
            </TakeActionHeadingDesktop>
            <BackToStartButtonContainer>
              <BackToStartButton showHorizontal />
            </BackToStartButtonContainer>
          </TitleAndButtonWrapper>
          {takeActionContent}
          {shareLink}
        </TakeActionWrapper>
      )}
      {showMoreResources && isModalOpen && (
        <MoreResourcesModal
          onClose={() => {
            document.body.style.overflow = 'visible';
            setIsModalOpen(false);
          }}
          moreResources={moreResources}
          moreResourcesBackground={moreResourcesBackground}
        />
      )}
    </>
  );
}
