import React, { useState } from 'react';
import TextInputField from '../../text-input-field/TextInputField';
import TextInputBox from '../../text-input-box/TextInputBox';
import {
  SubmitButton,
  SubmitButtonContainer,
} from '../../home-page/newsletter-sign-up/NewsletterSignUp.styles';
import {
  ContactFormContainer,
  InputBoxWrapper,
  ButtonWrapper,
} from './ContactForm.styles';
import {
  emailEndpoint,
  axiosConfig,
  proxyurl,
  fieldNames,
} from '../../../lib/utils';
import { colors } from '../../../style/colors';
import { useValidEmail } from '../../../lib/hooks';

const axios = require('axios');

export default function ContactForm({ togglePopup }) {
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});

  const isValidSubmission = () => {
    let errors = {};
    let formIsValid = true;

    if (
      fields[fieldNames.FIRST_NAME] == undefined ||
      fields[fieldNames.FIRST_NAME].length === 0
    ) {
      formIsValid = false;
      errors[fieldNames.FIRST_NAME] = 'FIRST NAME IS REQUIRED!';
    }
    if (
      fields[fieldNames.EMAIL] == undefined ||
      fields[fieldNames.EMAIL].length === 0
    ) {
      formIsValid = false;
      errors[fieldNames.EMAIL] = 'EMAIL IS REQUIRED!';
    } else if (useValidEmail(fields[fieldNames.EMAIL])) {
      formIsValid = false;
      errors[fieldNames.EMAIL] = 'INVALID EMAIL!';
    }
    if (
      fields[fieldNames.MESSAGE] == undefined ||
      fields[fieldNames.MESSAGE].length === 0
    ) {
      formIsValid = false;
      errors[fieldNames.MESSAGE] = 'MESSAGE IS REQUIRED!';
    }
    setErrors(errors);
    return formIsValid;
  };

  return (
    <ContactFormContainer>
      <TextInputField
        id="firstName"
        label="First Name"
        required
        showError={errors[fieldNames.FIRST_NAME]}
        value={
          fields[fieldNames.FIRST_NAME] ? fields[fieldNames.FIRST_NAME] : ''
        }
        onChange={(e) => setFields({ ...fields, FIRST_NAME: e.target.value })}
      />
      <TextInputField
        id="lastName"
        label="Last Name"
        value={fields[fieldNames.LAST_NAME] ? fields[fieldNames.LAST_NAME] : ''}
        onChange={(e) => setFields({ ...fields, LAST_NAME: e.target.value })}
      />
      <TextInputField
        id="email"
        label="Email"
        required
        showError={errors[fieldNames.EMAIL]}
        value={fields[fieldNames.EMAIL] ? fields[fieldNames.EMAIL] : ''}
        onChange={(e) => setFields({ ...fields, EMAIL: e.target.value })}
      />
      <InputBoxWrapper>
        <TextInputBox
          label="Message"
          showError={errors[fieldNames.MESSAGE]}
          required
          value={fields[fieldNames.MESSAGE] ? fields[fieldNames.MESSAGE] : ''}
          onChange={(e) => setFields({ ...fields, MESSAGE: e.target.value })}
        />
      </InputBoxWrapper>
      <ButtonWrapper>
        <SubmitButtonContainer
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <SubmitButton
            aria-label="Submission Button"
            color={colors.WHITE}
            type="submit"
            onClick={() => {
              if (submitRequest()) {
                document.body.style.overflow = 'hidden';
                document.querySelector('#area').value = '';
                setFields({});
                togglePopup();
              }
            }}
          >
            SUBMIT
          </SubmitButton>
        </SubmitButtonContainer>
      </ButtonWrapper>
    </ContactFormContainer>
  );

  function submitRequest() {
    const name = `${fields[fieldNames.FIRST_NAME]} ${
      fields[fieldNames.LAST_NAME]
    }`;
    const subject = `Get in touch - ${name}`;
    if (isValidSubmission()) {
      const request = `${emailEndpoint}?name=${fields['name']}&email=${
        fields[fieldNames.EMAIL]
      }&subject=${subject}&body=${fields[fieldNames.MESSAGE]}`;
      axios
        .post(proxyurl + request, axiosConfig)
        .then((response) => {
          return response;
        })
        .catch((error) => {
          return error;
        });
      return true;
    }
  }
}
