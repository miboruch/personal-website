import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import CloseButton from '../../atoms/CloseButton/CloseButton';
import { ContactFormValidation } from '../../../utils/formValidation';
import gsap from 'gsap';

const StyledForm = styled.form`
  width: 100%;
  height: 100%;
  background: transparent;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;

  ${({ theme }) => theme.mq.standard} {
    justify-content: center;
    align-items: center;
    text-align: left;
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

  ${({ theme }) => theme.mq.standard} {
    color: #fff;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  font-size: 20px;
  font-family: ${({ theme }) => theme.font.family.futura};
  color: rgba(0, 0, 0, 0.6);
  height: 36px;
  background: transparent !important;
  border: none;
  border-bottom: 1px solid #ccc;
  transition: border-bottom-color 1s ease, text-decoration 1s ease;

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
    border-bottom-color: rgba(173, 255, 178, 0.5);
  }

  &:invalid {
    text-decoration: line-through;
    border-bottom-color: rgba(255, 70, 92, 0.5);
  }

  ${({ theme }) => theme.mq.standard} {
    color: #fff;
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
  resize: none;

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
    border-bottom-color: rgba(173, 255, 178, 0.5);
  }

  &:invalid {
    border-bottom-color: rgba(255, 70, 92, 0.5);
  }

  ${({ theme }) => theme.mq.standard} {
    color: #fff;
  }
`;

const StyledTitle = styled(Paragraph)`
  color: #1d1d1d;
  font-size: 43px;
  font-family: ${({ theme }) => theme.font.family.avanti};
  padding-bottom: 3rem;

  &:hover {
    transform: translateY(-10px);
  }

  ${({ theme }) => theme.mq.standard} {
    color: #fff;
    font-size: 58px;
  }
  ${({ theme }) => theme.mq.desktop} {
    font-size: 89px;
  }
`;

const StyledSendMessage = styled.button`
  font-family: ${({ theme }) => theme.font.family.futura};
  font-size: 14px;
  padding-top: 3rem;
  font-weight: bold;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-decoration: underline;
  background: transparent;
  border: none;
  cursor: pointer;

  ${({ theme }) => theme.mq.standard} {
    color: #fff;
    padding-top: 1rem;
  }
`;

const Form = ({ setFormState }) => {
  const formRef = useRef(null);

  useEffect(() => {
    const form = formRef.current;
    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

    gsap.set([...form.children], { autoAlpha: 0 });

    tl.fromTo(
      form.children,
      { y: '+=30' },
      { y: '0', autoAlpha: 1, duration: 1.2, stagger: 0.3, delay: 1 }
    );
  }, []);

  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={ContactFormValidation}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(false);
        resetForm();
        setFormState && setFormState();
      }}
    >
      {({
        values,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <StyledForm onSubmit={handleSubmit} autoComplete={'off'} ref={formRef}>
          <CloseButton setBoxState={setFormState} contactPage />
          <StyledTitle>Send message</StyledTitle>
          <FormLine>
            <StyledInput
              type='text'
              name='name'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              required
              autoComplete={'off'}
            />
            <StyledLabel>{errors.name ? errors.name : 'name'}</StyledLabel>
          </FormLine>
          <FormLine>
            <StyledInput
              type='email'
              name='email'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              required
              autoComplete={'off'}
            />
            <StyledLabel>e-mail</StyledLabel>
          </FormLine>
          <FormLine>
            <StyledTextArea
              name='message'
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
              required
              autoComplete={'off'}
            />
            <StyledLabel>message</StyledLabel>
          </FormLine>
          <StyledSendMessage type='submit' disabled={isSubmitting}>
            send message
          </StyledSendMessage>
        </StyledForm>
      )}
    </Formik>
  );
};

Form.propTypes = {
  setFormState: PropTypes.func
};

export default Form;
