import React from 'react';
import { Input, InputLabel, InputWrapper } from './styles';

export function TextField({ label, ...props }) {
  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <Input type="text" {...props} />
    </InputWrapper>
  );
}
