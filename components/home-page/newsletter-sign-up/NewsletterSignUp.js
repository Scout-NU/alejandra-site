import React, { useState } from 'react';
import { getString } from '../../../lib/richText';
import { colors } from '../../../style/colors';
import TextInputField from '../../text-input-field/TextInputField';
import {
  ContentWrapper,
  NewsletterSignUpTextInput,
  NewsletterSignUpTitle,
  NewsletterDescriptionText,
  NewsletterSignUpWrapper,
  Overlay,
  PrivacyPolicyLinkText,
  SubmitButton,
} from './NewsletterSignUp.styles';
import ArchModal from '../../arch-modal/ArchModal';
import ConfirmationPopup from '../../confirmation-popup/ConfirmationPopup';

export default function NewsletterSignUp({
  description,
  newsletterConfirmationData,
  privacyPolicyLinkTitle,
  privacyPolicyText,
  title,
}) {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [name, updateName] = useState('');

  const onSubmitClick = () => {
    setIsConfirmationOpen(true);
  };

  return (
    <>
      <NewsletterSignUpWrapper>
        <NewsletterSignUpTitle>{getString(title)}</NewsletterSignUpTitle>
        <ContentWrapper>
          <NewsletterDescriptionText>
            {getString(description)}
          </NewsletterDescriptionText>
          <NewsletterSignUpTextInput
            id="name"
            label="Name"
            fullWidth
            onChange={(e) => updateName(e)}
            required={true}
          />
          <TextInputField id="email" label="Email" fullWidth required={true} />
          <PrivacyPolicyLinkText
            onClick={() => {
              document.body.style.overflow = 'hidden';
              setIsPrivacyPolicyOpen(true);
            }}
          >
            {getString(privacyPolicyLinkTitle)}
          </PrivacyPolicyLinkText>
          <SubmitButton
            color={colors.WHITE}
            type="submit"
            onClick={onSubmitClick}
          >
            SUBMIT
          </SubmitButton>
        </ContentWrapper>
        {isPrivacyPolicyOpen && (
          <ArchModal
            text={privacyPolicyText}
            onClose={() => {
              document.body.style.overflow = 'visible';
              setIsPrivacyPolicyOpen(false);
            }}
          />
        )}
        {isConfirmationOpen && (
          <ConfirmationPopup
            confirmationData={newsletterConfirmationData}
            togglePopup={setIsConfirmationOpen}
            name={name}
            page="home"
          />
        )}
      </NewsletterSignUpWrapper>
      <Overlay showOverlay={isPrivacyPolicyOpen || isConfirmationOpen} />
    </>
  );
}
