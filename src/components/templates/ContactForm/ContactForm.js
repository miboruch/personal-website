import React from 'react';
import PropTypes from 'prop-types';
import Form from '../../molecules/Form/Form';
import { StyledWrapper, FormWrapper } from './ContactForm.styles';

const ContactForm = ({ isOpen, setFormState }) => (
  <StyledWrapper isOpen={isOpen}>
    <FormWrapper>
      <Form setFormState={setFormState} />
    </FormWrapper>
  </StyledWrapper>
);

ContactForm.propTypes = {
  isOpen: PropTypes.bool,
  setFormState: PropTypes.func.isRequired
};

export default ContactForm;
