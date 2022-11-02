import React from 'react';
import { useField } from 'formik';
import { Select } from './styles';
import { BaseFormField } from '../BaseFormField';

export function SelectField({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <BaseFormField
      label={label}
      errorMessage={meta.error}
      hasError={meta.touched && meta.error}
    >
      <Select {...field} {...props} />
    </BaseFormField>
  );
}
