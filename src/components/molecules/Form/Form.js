import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { CloseButton } from 'src/components';
import { ContactFormValidation } from '../../../utils/formValidation';
import gsap from 'gsap';
import { StyledForm, FormLine, StyledLabel, StyledInput, StyledTextArea, StyledTitle, StyledSendMessage } from './Form.styles';

const Form = ({ setFormState }) => {
  const formRef = useRef(null);

  const handleClose = () => setFormState(false);

  useEffect(() => {
    const form = formRef.current;
    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

    gsap.set([...form.children], { autoAlpha: 0 });

    tl.fromTo(form.children, { y: '+=30' }, { y: '0', autoAlpha: 1, duration: 1.2, stagger: 0.3, delay: 1 });
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
      {({ values, errors, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <StyledForm onSubmit={handleSubmit} autoComplete={'off'} ref={formRef}>
          <CloseButton handleClose={handleClose} theme={'dark'} contactPage />
          <StyledTitle>Send message</StyledTitle>
          <FormLine>
            <StyledInput type='text' name='name' onChange={handleChange} onBlur={handleBlur} value={values.name} required autoComplete={'off'} />
            <StyledLabel>{errors.name ? errors.name : 'name'}</StyledLabel>
          </FormLine>
          <FormLine>
            <StyledInput type='email' name='email' onChange={handleChange} onBlur={handleBlur} value={values.email} required autoComplete={'off'} />
            <StyledLabel>e-mail</StyledLabel>
          </FormLine>
          <FormLine>
            <StyledTextArea name='message' type='text' onChange={handleChange} onBlur={handleBlur} value={values.message} required autoComplete={'off'} />
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
