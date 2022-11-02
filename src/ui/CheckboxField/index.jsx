import React from 'react';
import { useField } from 'formik';
import { Checkbox, CheckboxLabel } from './styles';
import { BaseFormField } from '../BaseFormField';

export function CheckboxField({ name, label, children, ...props }) {
  const [field, meta] = useField(name);
  return (
    <BaseFormField
      label={label}
      errorMessage={meta.error}
      hasError={meta.touched && meta.error}
    >
      <CheckboxLabel>
        <Checkbox
          data-testid="checkbox-input"
          type="checkbox"
          checked={field.value}
          {...field}
          {...props}
        />
        {children}
      </CheckboxLabel>
    </BaseFormField>
  );
}
