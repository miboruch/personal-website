import React from 'react';
import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import CloseButton from '../../atoms/CloseButton/CloseButton';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
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
`;

const StyledForm = styled.form`
  width: 90%;
  height: 90%;
  background: #fff;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;

  ${({ theme }) => theme.mq.tabletS} {
    height: 80%;
  }
`;

const FormLine = styled.div`
  position: relative;
  margin-bottom: 3rem;
  width: 85%;

  ${({ theme }) => theme.mq.standard} {
    width: 60%;
  }
`;

const StyledLabel = styled.label`
  color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.5s ease;
  transform-origin: left;
`;

const StyledInput = styled.input`
  width: 100%;
  font-size: 20px;
  font-family: ${({ theme }) => theme.font.family.futura};
  color: rgba(0, 0, 0, 0.6);
  height: 36px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #ccc;
  transition: border-bottom-color 1s ease;

  &:focus {
    outline: none;
    border-bottom: 1px solid #8d8d8d;
  }

  &:focus ~ ${StyledLabel} {
    transform: scale(0.8) translateY(-20px);
  }

  &:valid ~ ${StyledLabel} {
    transform: scale(0.8) translateY(-20px);
  }

  &:valid {
    border-bottom-color: lightgreen;
  }

  &:invalid {
    border-bottom-color: tomato;
  }
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  font-size: 20px;
  font-family: ${({ theme }) => theme.font.family.futura};
  color: rgba(0, 0, 0, 0.6);
  height: 100px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #ccc;
  transition: border-bottom-color 1s ease;

  &:focus {
    outline: none;
    border-bottom: 1px solid #8d8d8d;
  }

  &:focus ~ ${StyledLabel} {
    transform: scale(0.8) translateY(-20px);
  }

  &:valid ~ ${StyledLabel} {
    transform: scale(0.8) translateY(-20px);
  }

  &:valid {
    border-bottom-color: lightgreen;
  }

  &:invalid {
    border-bottom-color: tomato;
  }
`;

const StyledTitle = styled(Paragraph)`
  color: #1d1d1d;
  font-size: 43px;
  font-family: ${({ theme }) => theme.font.family.avanti};
  padding-bottom: 3rem;
`;

const StyledSendMessage = styled.button`
  font-size: 14px;
  padding-top: 3rem;
  font-weight: bold;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-decoration: underline;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const ContactForm = ({ isOpen, setFormState }) => {
  return (
    <StyledWrapper isOpen={isOpen}>
      <StyledForm method='POST' data-netlify='true' action='/'>
        <CloseButton setFormState={setFormState} />
        <StyledTitle>Send me a message</StyledTitle>
        <FormLine>
          <StyledInput type='name' name='name' required pattern='\S+.*' />
          <StyledLabel>name</StyledLabel>
        </FormLine>
        <FormLine>
          <StyledInput
            type='email'
            name='email'
            required
            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
          />
          <StyledLabel>e-mail</StyledLabel>
        </FormLine>
        <FormLine>
          <StyledTextArea name='message' required />
          <StyledLabel>message</StyledLabel>
        </FormLine>
        <StyledSendMessage type='submit'>send message</StyledSendMessage>
      </StyledForm>
    </StyledWrapper>
  );
};

export default ContactForm;
