import { render } from '@testing-library/react';
import { useField } from 'formik'; // package will be auto mocked

import { SelectField } from '..';

jest.mock('formik'); // formik package is auto mocked

describe('SelectField component', () => {
  it('should render label', () => {
    const mockMeta = {
      touched: false,
      error: '',
      initialError: '',
      initialTouched: false,
      initialValue: '',
      value: '',
    };
    const mockField = {
      value: '',
      checked: false,
      onChange: jest.fn(),
      onBlur: jest.fn(),
      multiple: undefined,
      name: 'test',
    };
    useField.mockReturnValue([mockField, mockMeta]);

    const { getByText } = render(<SelectField name="test" label="Test" />);

    expect(getByText('Test')).toBeDefined();
  });


  it('should render error from Formik', () => {
    const mockMeta = {
      touched: true,
      error: 'Error message',
      initialError: '',
      initialTouched: false,
      initialValue: '',
      value: '',
    };
    const mockField = {
      value: '',
      checked: false,
      onChange: jest.fn(),
      onBlur: jest.fn(),
      multiple: undefined,
      name: 'test',
    };
    useField.mockReturnValue([mockField, mockMeta]);

    const { getByText } = render(<SelectField name="test" label="Test" />);

    expect(getByText('Error message')).toBeDefined();
  });
});
