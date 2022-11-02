import React from 'react';
import { useField } from 'formik';
import { BaseFormField } from '../BaseFormField';
import { Input } from './styles';

export function TextField({ label, name, ...props }) {
  const [field, meta] = useField(name);

  return (
    <BaseFormField
      name={name}
      label={label}
      errorMessage={meta.error}
      hasError={meta.touched && meta.error}
    >
      <Input id={name} type="text" {...field} {...props} />
    </BaseFormField>
  );
}
