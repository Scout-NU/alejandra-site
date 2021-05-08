import { colors } from '../../../style/colors';
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
import React, { useState } from 'react';
import { emailEndpoint, axiosConfig, proxyurl } from '../../../lib/utils';

const axios = require('axios');

export default function ContactForm({ togglePopup }) {
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});

  const isValidSubmission = () => {
    let errors = {};
    let formIsValid = true;
    const validEmail = new RegExp(
      '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$',
    );
    if (fields['firstName'] == undefined || fields['firstName'].length < 1) {
      formIsValid = false;
      errors['firstName'] = 'FIRST NAME IS REQUIRED!';
    }
    if (!validEmail.test(fields['email'])) {
      formIsValid = false;
      errors['email'] = 'EMAIL IS REQUIRED!';
    }
    if (fields['message'] == undefined || fields['message'].length < 1) {
      formIsValid = false;
      errors['message'] = 'MESSAGE IS REQUIRED!';
    }
    setErrors(errors);
    return formIsValid;
  };

  return (
    <>
      <ContactFormContainer>
        <TextInputField
          id="firstName"
          label="First Name"
          required
          showError={errors['firstName']}
          value={fields['firstName'] ? fields['firstName'] : ''}
          onChange={(e) => setFields({ ...fields, firstName: e })}
        />
        <TextInputField
          id="lastName"
          label="Last Name"
          value={fields['lastName'] ? fields['lastName'] : ''}
          onChange={(e) => setFields({ ...fields, lastName: e })}
        />
        <TextInputField
          id="email"
          label="Email"
          required
          showError={errors['email']}
          value={fields['email'] ? fields['email'] : ''}
          onChange={(e) => setFields({ ...fields, email: e })}
        />
        <InputBoxWrapper>
          <TextInputBox
            label="Message"
            showError={errors['message']}
            required
            value={fields['message'] ? fields['message'] : ''}
            onChange={(e) => setFields({ ...fields, message: e.target.value })}
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
                  document.getElementById('area').value = '';
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
    </>
  );

  function submitRequest() {
    const name = `${fields['firstName']} ${fields['lastName']}`;
    const subject = `Get in touch - ${name}`;
    if (isValidSubmission()) {
      const request = `${emailEndpoint}?name=${fields['name']}&email=${fields['email']}&subject=${subject}&body=${fields['message']}`;
      axios
        .post(proxyurl + request, axiosConfig)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      return true;
    }
  }
}
