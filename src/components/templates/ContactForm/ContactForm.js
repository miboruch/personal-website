import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Form from '../../molecules/Form/Form';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1500;
  position: fixed;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  display: flex;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: opacity 1s ease, visibility 1s ease;

  ${({ theme }) => theme.mq.standard} {
    display: none;
  }
`;

const FormWrapper = styled.div`
  width: 90%;
  height: 90%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactForm = ({ isOpen, setFormState }) => {
  return (
    <StyledWrapper isOpen={isOpen}>
      <FormWrapper>
        <Form setFormState={setFormState} />
      </FormWrapper>
    </StyledWrapper>
  );
};

ContactForm.propTypes = {
  isOpen: PropTypes.bool,
  setFormState: PropTypes.func.isRequired
};

export default ContactForm;
