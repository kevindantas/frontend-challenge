import React from 'react';
import { useField } from 'formik';
import { Select } from './styles';
import { BaseFormField } from '../BaseFormField';

export function SelectField({ label, name, ...props }) {
  const [field, meta] = useField(name);

  return (
    <BaseFormField
      name={name}
      label={label}
      errorMessage={meta.error}
      hasError={meta.touched && meta.error}
    >
      <Select id={name} {...field} {...props} />
    </BaseFormField>
  );
}
