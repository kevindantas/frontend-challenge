import React from 'react';
import { ErrorText, InputLabel, InputWrapper } from './styles';

export function BaseFormField({ label, name, errorMessage, hasError, children }) {
  return (
    <InputWrapper>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
      {children}
      {hasError && <ErrorText role="alert">{errorMessage}</ErrorText>}
    </InputWrapper>
  );
}
